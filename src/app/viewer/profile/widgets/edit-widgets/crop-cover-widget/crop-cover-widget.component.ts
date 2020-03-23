import { Component, OnInit, ViewChild } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ImageCropperComponent, ImageCroppedEvent } from '@app/libs/wb-image-cropper';

@Component({
  selector: 'app-crop-cover-widget',
  templateUrl: './crop-cover-widget.component.html',
  styleUrls: ['./crop-cover-widget.component.scss']
})
export class CropCoverWidgetComponent implements OnInit {

  @ViewChild(ImageCropperComponent, { static: true }) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  containWithinAspectRatio = false;

  editProfileService: EditProfileService;
  constructor(editProfileService: EditProfileService) {
    this.editProfileService = editProfileService;
  }

  ngOnInit() {
  }

  SaveCroppedCover() {
    this.editProfileService.saveProfileCover(this.croppedImage);
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
