import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, ImageCroppedEvent } from '@app/libs/wb-image-cropper';
import { EditPageService } from '@app/services/edit-page.service';

@Component({
  selector: 'app-crop-page-cover-widget',
  templateUrl: './crop-page-cover-widget.component.html',
  styleUrls: ['./crop-page-cover-widget.component.scss']
})
export class CropPageCoverWidgetComponent implements OnInit {


  @ViewChild(ImageCropperComponent, { static: true }) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  containWithinAspectRatio = false;

  constructor(public editPageService: EditPageService) {
  }

  ngOnInit() {
  }

  SaveCroppedCover() {
    this.editPageService.savePageCover(this.croppedImage);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    //console.log(event);
  }

  imageLoaded() {
    this.showCropper = true;
    //console.log('Image loaded');
  }

  cropperReady() {
    //console.log('Cropper ready');
  }

  loadImageFailed() {
    //console.log('Load failed');
  }

  rotateLeft() {
    this.imageCropper.rotateLeft();
  }

  rotateRight() {
    this.imageCropper.rotateRight();
  }

  flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }

  flipVertical() {
    this.imageCropper.flipVertical();
  }

  resetImage() {
    this.imageCropper.resetImage();
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }


}
