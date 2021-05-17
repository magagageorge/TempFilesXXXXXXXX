import { Component, Input, OnInit } from '@angular/core';
import { DwProfile } from '@app/daywaka/models/profile.models';
import { DwProfileViewerService } from '@app/daywaka/services/dw-profile-viewer.service';
import { DwProfileService } from '@app/daywaka/services/dw-profile.service';

@Component({
  selector: 'app-dw-employer-profile-viewer',
  templateUrl: './employer-profile-viewer.component.html',
  styleUrls: ['./employer-profile-viewer.component.scss']
})
export class EmployerProfileViewerComponent implements OnInit {

  @Input() profileId: number;
  dwProfile: DwProfile = null;
  constructor(public dwProfileService: DwProfileService, public dwProfileViewerService: DwProfileViewerService) { }

  ngOnInit(): void {
    var _this = this;
    this.dwProfileService.getDwProfile({ id: _this.profileId }).subscribe(result => {
      if (result.isSuccess()) {
        var resp = result.getResultData() as DwProfile;
        console.log(resp);
        _this.dwProfile = resp;
      } else {
        //var errors = result.getErrors();
        _this.dwProfileViewerService.viewProfileInModal(false, null);
      }
    });
  }

}
