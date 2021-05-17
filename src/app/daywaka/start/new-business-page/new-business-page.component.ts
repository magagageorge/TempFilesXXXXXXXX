import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { PageSummary } from '@app/models/page/page.model';
import { LocalStorageService } from '@app/services/local-storage.service';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-new-business-page',
  templateUrl: './new-business-page.component.html',
  styleUrls: ['./new-business-page.component.scss']
})
export class NewBusinessPageComponent implements OnInit {

  selectedPage: PageSummary = null;
  constructor(public daywakaService: DaywakaService, private storageService: LocalStorageService, private formBuilder: FormBuilder, public pageService: PageService, public router: Router) { }

  ngOnInit(): void {
    var _this = this;
    this.daywakaService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.daywakaService.DW_CONFIGS.defaultPage != null) {
          _this.router.navigateByUrl('/' + _this.daywakaService.DW_CONFIGS.defaultPage.url);
        }
      } else {
        if (_this.pageService.MYPAGES.length == 0) {
          _this.pageService.createPageOnFly();
        }
      }
    });

    this.pageService.hasNewPageCreated().subscribe((newPage: PageSummary) => {
      if (newPage != null) {
        _this.daywakaService.switchPage(newPage);
      }
    });

  }

  setSelectedPage(page: PageSummary) {
    this.selectedPage = page as PageSummary;
  }

  continueWithSelectedPage(page: PageSummary) {
    this.daywakaService.switchPage(page);
  }

}
