import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwProfileService } from '@app/daywaka/services/dw-profile.service';
import { ListItemsPicker } from '@app/libs/list-items-picker/list-items-picker';
import { UtilitiesService } from '@app/services/utilities.service';

@Component({
  selector: 'app-dw-edit-job-preferences-widget',
  templateUrl: './dw-edit-job-preferences-widget.component.html',
  styleUrls: ['./dw-edit-job-preferences-widget.component.scss']
})
export class DwEditJobPreferencesWidgetComponent implements OnInit {

  job_preferencesGroup: FormGroup;
  job_preferencesPicker: ListItemsPicker = new ListItemsPicker();
  inEditjob_preferencesPicker: ListItemsPicker = new ListItemsPicker();
  submitted: boolean = false;

  constructor(public dwProfileService: DwProfileService,public daywakaService:DaywakaService, private formBuilder: FormBuilder) {
    this.inEditjob_preferencesPicker.itemsList = this.dwProfileService.MY_DAYWAKA_PROFILE.job_preferences;
  }

  ngOnInit() {
      this.dwProfileService.getJobCategories().subscribe(response => {
        this.job_preferencesPicker.itemsList = response.getResultData();
      });
  }

  save() {
    if (this.submitted) {
      return false;
    }

    this.submitted = true;
    if (this.dwProfileService.editMode.job_preferences.action == 'addJobPreferences' && this.job_preferencesPicker.selectedItemsList.length > 0) {
      this.dwProfileService.saveJobPreferences(this.job_preferencesPicker.selectedItemsList);
    }

    if (this.dwProfileService.editMode.job_preferences.action == 'editJobPreferences' && this.inEditjob_preferencesPicker.selectedItemsList.length > 0) {
      this.dwProfileService.deleteJobPreferences(this.inEditjob_preferencesPicker.selectedItemsList);
    }

    this.dwProfileService.cancelEditProfile();
  }

}
