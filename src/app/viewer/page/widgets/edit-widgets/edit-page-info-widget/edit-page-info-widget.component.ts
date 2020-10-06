import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { URL_REGEXP } from '@app/libs/utilities/wb-utilities';
import { City } from '@app/models/city';
import { Country } from '@app/models/country';
import { PageProfileViewer } from '@app/models/page-profile-viewer';
import { PageForm } from '@app/models/page/page.model';
import { EditPageService } from '@app/services/edit-page.service';
import { PageService } from '@app/services/page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-page-info-widget',
  templateUrl: './edit-page-info-widget.component.html',
  styleUrls: ['./edit-page-info-widget.component.scss']
})
export class EditPageInfoWidgetComponent implements OnInit {

  active_tab: string = 'general';
  frm_general: FormGroup;
  frm_contacts: FormGroup;
  frm_location: FormGroup;
  submitted: boolean;
  pageModel: PageForm;
  general_submitted: boolean = false;
  contacts_submitted: boolean = false;
  location_submitted: boolean = false;
  selectedLocation: Country = new Country();

  constructor(public editPageService: EditPageService, public urlViewerService: UrlViewerService, public pageService: PageService, public utilityService: UtilitiesService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    var __this = this;
    this.frm_general = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      about: ['', []],
    });

    this.frm_contacts = this.formBuilder.group({
      phone_number: ['', []],
      email: ['', []],
      website: ['', [Validators.pattern(URL_REGEXP)]],
    });

    this.frm_location = this.formBuilder.group({
      address: ['', []],
      country_code: ['', []],
      city_id: ['', []],
      zip: ['', []],
    });
    this.fillForm();
  }

  get fg() { return this.frm_general.controls; }

  get fc() { return this.frm_contacts.controls; }

  get fl() { return this.frm_location.controls; }

  fillForm() {
    this.pageModel = new PageForm();
    this.pageModel.id = this.urlViewerService.PPVIEWER.page.id;
    this.pageModel.name = this.urlViewerService.PPVIEWER.page.name;
    this.pageModel.about = this.urlViewerService.PPVIEWER.page.about;
    this.pageModel.url = this.urlViewerService.PPVIEWER.page.url;

    this.pageModel.email = this.urlViewerService.PPVIEWER.page.email;
    this.pageModel.address = this.urlViewerService.PPVIEWER.page.address;
    this.pageModel.phone = this.urlViewerService.PPVIEWER.page.phone;
    this.pageModel.website = this.urlViewerService.PPVIEWER.page.website;
    if(this.urlViewerService.PPVIEWER.page.location!=null){
      if(this.urlViewerService.PPVIEWER.page.location.country_code!='NONE'){
        this.pageModel.country_code=this.urlViewerService.PPVIEWER.page.location.country_code;
      }else{
        this.pageModel.country_code = '';
      }
      if(this.urlViewerService.PPVIEWER.page.location.region!='none'){
        this.pageModel.city_id=this.urlViewerService.PPVIEWER.page.location.region_id;
      }else{
        this.pageModel.city_id = '';
      } 
      this.switchLocation(this.pageModel.country_code);     
    }
    //this.pageModel.about = this.profileService.MYPROFILE.about;
  }

  saveInfo() {
    var _this = this;
    const formData: any = new FormData();
    if (this.active_tab == 'general') {
      formData.append("name", _this.pageModel.name);
      formData.append("url", _this.pageModel.url);
      formData.append("about", _this.pageModel.about);
    }

    if (this.active_tab == 'contacts') {
      formData.append("email", _this.pageModel.email);
      formData.append("phone", _this.pageModel.phone);
      formData.append("website", _this.pageModel.website);
    }

    if (this.active_tab == 'location') {
      formData.append("address", _this.pageModel.address);
      formData.append("country_code", _this.pageModel.country_code);
      formData.append("city_id", _this.pageModel.city_id);
      formData.append("zip", _this.pageModel.zip);
    }
    this.editPageService.provider = this.editPageService.getConfigValue('forms.update.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/my-page/';
    return this.editPageService.service.update(this.editPageService.provider, formData, { id: this.pageModel.id }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
          if(data.viewer.page!=null){
            _this.urlViewerService.PPVIEWER = data.viewer as PageProfileViewer;
          }
      } else {

      }
    });

  }

  saveGeneral() {
    this.general_submitted = true;
    if (this.frm_general.invalid) {
      return;
    }
    this.saveInfo();
  }

  saveContacts() {
    console.log('contas 1');
    this.contacts_submitted = true;
    if (this.frm_contacts.invalid) {
      return;
    }
    console.log('contas 2');
    this.saveInfo();
  }

  saveLocation() {
    this.location_submitted = true;
    if (this.frm_location.invalid) {
      return;
    }
    this.saveInfo();
  }

  activateTab(tab: string) {
    this.active_tab = tab;
  }

  switchLocation(code: any) {
    var _this = this;
    this.filterCountry(code).subscribe((country: Country) => {
      if (country) {
        _this.selectedLocation = country;
        if (_this.pageModel.city_id != '') {
          _this.searchCityInSelectedCountry(Number(_this.pageModel.city_id)).subscribe(city => {
            if (city) {
            } else {
              _this.pageModel.city_id = '';
            }
          });
        }
      } else {
        _this.selectedLocation = new Country();
      }
    });
  }

  filterCountry(code: any): Observable<Country> {
    return of(this.utilityService.COUNTRIES.find((country: Country) => country.code == code));
  }

  searchCityInSelectedCountry(id: number): Observable<City> {
    return of(this.selectedLocation.cities.find((city: City) => city.id == id));
  }


}
