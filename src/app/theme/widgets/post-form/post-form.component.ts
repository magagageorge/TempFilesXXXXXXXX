import { Component, OnInit, Inject } from '@angular/core';
import { PostingService } from '@app/services/posting.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule,NgForm,NgModel} from '@angular/forms';
import { ProfileService } from '@app/services/profile.service';
import { FeedService } from '@app/services/feed.service';
import { DeviceDetectorService } from '@app/libs/device-detector';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postingService:PostingService;
  profileService:ProfileService;
  feedService:FeedService;
  deviceService:DeviceDetectorService;
  linkPreviewSevice:WfLinkPreviewService;

  constructor(postingService:PostingService, feedService:FeedService,profileService:ProfileService, deviceService:DeviceDetectorService,linkPreviewSevice:WfLinkPreviewService){ 
    this.postingService=postingService;
    this.profileService=profileService;
    this.feedService=feedService;
    this.deviceService=deviceService;
    this.linkPreviewSevice=linkPreviewSevice;
  }

  ngOnInit() {
	this.postingService.show_hide_inputs();  
  } 
}
