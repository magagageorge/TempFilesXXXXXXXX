import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportContent } from '@app/models/report-content';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '@app/services/utilities.service';
import { AppModalService } from '@app/services/app-modal.service';


@Component({
  selector: 'app-report-content-modal',
  templateUrl: './report-content-modal.component.html',
  styleUrls: ['./report-content-modal.component.scss']
})
export class ReportContentModalComponent implements OnInit {
  appModalService: AppModalService;
  utilitiesService: UtilitiesService;
  redirectDelay: number;
  showMessages: any;
  submitted: boolean = false;
  errors: string[];
  messages: string[];
  frm_gGroup: FormGroup;
  report_model: ReportContent = new ReportContent();
  constructor(appModalService: AppModalService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder, public modal: NgbActiveModal) {
    this.appModalService = appModalService;
    this.utilitiesService = utilitiesService;
  }

  ngOnInit() {
    this.frm_gGroup = this.formBuilder.group({ what: ['', Validators.required], });
  }

  setModel(object_id: number, object_model: string) {
    this.report_model.object_id = object_id;
    this.report_model.object_model = object_model;
  }

  get f() { return this.frm_gGroup.controls; }

  report() {

    if (this.frm_gGroup.invalid) {
      return;
    }
    this.errors = this.messages = [];
    this.appModalService.feedService.service.getProvider(this.appModalService.feedService.provider).crudconfig.route_url = 'feed/report-content/';
    if (this.submitted === false) {
      this.submitted = true;
      var __this = this;
      this.appModalService.feedService.service.create(this.appModalService.feedService.provider, this.report_model, {}).subscribe(function (result) {
        __this.submitted = false;
        if (result.isSuccess()) {
          __this.messages = result.getMessages();
          var data = result.getResultData();
          if (data == true) {
            __this.report_model.done_reporting = true;
          }
        } else {
          __this.errors = result.getErrors();
        }
      });
    }

  }

}
