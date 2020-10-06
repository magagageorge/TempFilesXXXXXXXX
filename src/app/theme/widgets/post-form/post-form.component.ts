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


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Input() postingAs: string;
  @Input() page: PageSummary;
 
  constructor(public postingService: PostingService, public pageService: PageService, public feedService: FeedService, public deviceService: DeviceDetectorService, public linkPreviewSevice: WfLinkPreviewService) {
  }

  ngOnInit() {
    this.postingService.show_hide_inputs();
    this.setFormInputs();
  }

  setFormInputs() {
    this.postingService.postingAs = this.postingAs;
    if (this.postingAs === 'Page' && this.page != null) {
      console.log(this.page);
      this.postingService.postingAs_page = this.page;
    } else {
      this.postingService.postingAs_page = null;
    }
  }
}
