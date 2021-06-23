import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DwGuestForm } from '@app/daywaka/models/global.models';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { LocalStorageService } from '@app/services/local-storage.service';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  guestForm: DwGuestForm = new DwGuestForm();
  show_map: boolean = false;
  submitted: boolean = false;
  frm_guestForm: FormGroup;
  saving_job: boolean = false;
  starttime: string;
  DHOURS: any[] = [];
  DMINUTES: any[] = [];

  constructor(public daywakaService: DaywakaService, private storageService: LocalStorageService, private formBuilder: FormBuilder, public pageService: PageService, public router: Router) { }

  ngOnInit(): void {
    this.daywakaService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.daywakaService.DW_CONFIGS.defaultPage != null) {
          this.router.navigateByUrl('/' + this.daywakaService.DW_CONFIGS.defaultPage.url);
        }
      }
    });

    this.frm_guestForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      business_name: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      business_email: ['', [Validators.required, Validators.email]],
      job_type: ['', [Validators.required]],
      city_name: ['', [Validators.required]],
      no_workers: ['', [Validators.required]],
      description: [''],
      source: [''],
    });

    var form_data= this.storageService.get("DAYWAKA_GETSTARTED_FORM");
    if(SysFunctions.isJsonFormat(form_data)){
      this.guestForm = JSON.parse(form_data) as DwGuestForm;
    }
  }

  get frm() {
    return this.frm_guestForm.controls;
  }

  save() {
    this.submitted = true;
    if (this.frm_guestForm.invalid) {
      return;
    }
    var _this = this;
    this.storageService.set("DAYWAKA_GETSTARTED_FORM", JSON.stringify(this.guestForm));

    this.router.navigateByUrl('/dw-get-started/new-business');
  }

}
