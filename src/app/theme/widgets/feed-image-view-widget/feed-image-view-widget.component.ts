import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { Feed } from '@app/models/feed/feed';
import { ImageIconsService } from '@app/services/image-icons.service';

@Component({
  selector: 'app-feed-image-view-widget',
  templateUrl: './feed-image-view-widget.component.html',
  styleUrls: ['./feed-image-view-widget.component.scss']
})
export class FeedImageViewWidgetComponent implements OnInit {

  @Input() IMAGES: any[];
  @Input() feedPost:Feed;
  @Input() container_width: number;
  boxheight: number = 0;
  halfwidth: number = 0;
  wh_ratio: number = 0;
  wh_ratio_one:number=0;
  wh_ratio_two:number=0;
  row_one_height:number=0;
  row_one_width:number=0;
  row_two_width:number=0;
  row_two_height:number=0;
  feedService:FeedService;
  imageIconsService:ImageIconsService;
  constructor(feedService:FeedService,imageIconsService:ImageIconsService) {
    this.feedService=feedService;
    this.imageIconsService=imageIconsService;
   }

  ngOnInit() {
    this.halfwidth = Math.round(this.container_width / 2);
    this.setAverageHeight();
  }

  getPictureHeight(width: number, height: number) {
    let ratio = width / height;
    let new_height = this.container_width / ratio;
    return new_height;
  }

  /* Calculate the Images Box height for displaying more than one image */
  setAverageHeight() {
    var totalHeight: number = 0;
    var totalWidth: number = 0;
    var count: number = 0;
    var boxh: number = 0;
    this.IMAGES.forEach(picture => {
      if (count < 5) {
        totalHeight = Number(picture.data.height) + totalHeight;
        totalWidth = Number(picture.data.width) + totalWidth;
        count++;
      }
    });
    this.boxheight = this.ActualBoxHeight(this.getPictureHeight((totalWidth / count), (totalHeight / count)));
  }

  ActualBoxHeight(averageHeight: number): number {
    var returnN: number = 0;
    if (this.IMAGES.length == 2) {
      returnN = (averageHeight / 2) * 1.2;
      returnN=Number(((returnN>(this.container_width/0.91))?(this.container_width/0.91):returnN).toFixed(0));
    }
    if (this.IMAGES.length == 3) {
      returnN = Math.round(this.container_width/0.87);
      this.row_one_height=Number(Math.round(returnN * this.IMAGES[0].data.height/(this.IMAGES[0].data.height+((this.IMAGES[1].data.height+this.IMAGES[2].data.height)/2))));
      this.row_two_height=Number(Math.round(returnN-this.row_one_height));
      this.wh_ratio_one=Number((this.container_width / this.row_one_height).toFixed(2));
      this.wh_ratio_two=Number((this.halfwidth / this.row_two_height).toFixed(2));
    }

    this.wh_ratio = Number((this.halfwidth / returnN).toFixed(3));
    return returnN;
  }


}
