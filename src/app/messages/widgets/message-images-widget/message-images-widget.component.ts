import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MessageBodyMedia } from '@app/messages/models/message-body-media';
import { ImageIconsService } from '@app/services/image-icons.service';
import { MessengerService } from '@app/messages/services/messenger.service';

@Component({
  selector: 'app-message-images-widget',
  templateUrl: './message-images-widget.component.html',
  styleUrls: ['./message-images-widget.component.scss']
})
export class MessageImagesWidgetComponent implements OnInit {

  @Input() IMAGES: MessageBodyMedia[];
  @Input() max_picture_width: number;
  boxheight: number = 0;
  wh_ratio: number = 0;
  wh_ratio_one: number = 0;
  wh_ratio_two: number = 0;
  row_one_height: number = 0;
  row_one_width: number = 0;
  row_two_width: number = 0;
  row_two_height: number = 0;

  halfwidth: number = 0;
  three_halfwidth: number = 0;
  one_third_width: number = 0;
  two_imgs_height: number = 0;
  three_imgs_height_one: number = 0;
  three_imgs_height_two: number = 0;
  four_imgs_height_one: number = 0;
  four_imgs_height_two: number = 0;

  height_two: number = 0;

  constructor(public imageIconsService: ImageIconsService, public messengerService: MessengerService) { }

  ngOnInit() {
    this.calculateHeights();
  }

  getPictureHeight(width: number, height: number) {
    let ratio = width / height;
    let new_height = this.max_picture_width / ratio;
    return new_height;
  }

  calculateHeights() {
    this.halfwidth = Math.round(this.max_picture_width / 2);
    this.one_third_width = Math.round(this.max_picture_width / 3);

    this.three_imgs_height_two = Math.round(this.halfwidth * 1.1);
    this.three_imgs_height_one = (this.max_picture_width - this.three_imgs_height_two);
    this.four_imgs_height_two = Math.round(this.one_third_width * 1.1);
    this.four_imgs_height_one = (this.max_picture_width - this.four_imgs_height_two);
    this.two_imgs_height = this.max_picture_width;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateHeights();
  }

}
