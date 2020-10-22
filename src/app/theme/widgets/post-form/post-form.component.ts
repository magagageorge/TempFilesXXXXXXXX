import { Component, OnInit, Inject, Input } from '@angular/core';
import { PostingService } from '@app/services/posting.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ProfileService } from '@app/services/profile.service';
import { FeedService } from '@app/services/feed.service';
import { DeviceDetectorService } from '@app/libs/device-detector';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { PageService } from '@app/services/page.service';
import { PageSummary } from '@app/models/page/page.model';
import { Profile } from '@app/models/profile/profile';
import { ProfileViewer } from '@app/models/profile-viewer';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Input() postingAs: string;
  @Input() postingTo: string;
  @Input() page: PageSummary;
  @Input() profile: ProfileViewer;

  constructor(public postingService: PostingService, public pageService: PageService, public feedService: FeedService, public deviceService: DeviceDetectorService, public linkPreviewSevice: WfLinkPreviewService) {
  }

  ngOnInit() {
    this.postingService.show_hide_inputs();
    this.setFormInputs();
  }

  setFormInputs() {
    if (this.postingTo == 'Page' && this.page != null) {
      if (this.page.my_page != false) {
        this.postingAs = this.postingAs = 'Page';
      } else {
        this.postingAs = 'Profile';
      }
    } else {
      this.postingAs = this.postingAs = 'Profile';
    }
  }

  get postingAsImage() {
    if (this.postingAs == 'Page' && this.page != null) {
      return this.page.picture.face;
    } else if (this.postingAs == 'Profile' && this.postingService.profileService.MYPROFILE != null) {
      return this.postingService.profileService.MYPROFILE.avatar.face;
    } else {
      return '';
    }
  }

  get postingAsName() {
    if (this.postingAs == 'Page' && this.page != null) {
      return this.page.name;
    } else if (this.postingAs == 'Profile' && this.postingService.profileService.MYPROFILE != null) {
      return (this.postingService.profileService.MYPROFILE.firstname + ' ' + this.postingService.profileService.MYPROFILE.lastname);
    } else {
      return '';
    }
  }

  wantToPostAs() {
    this.postingService.postingAs = this.postingAs;
    this.postingService.postingAs_page = this.page;
    this.postingService.messageFocus();
  }

}
