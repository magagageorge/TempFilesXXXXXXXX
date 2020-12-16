import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageCropperComponent, ImageCroppedEvent } from '@app/libs/wb-image-cropper';
import { PageMainCategory } from '@app/models/page/page.cagegory';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-dw-create-page-modal',
  templateUrl: './dw-create-page-modal.component.html',
  styleUrls: ['./dw-create-page-modal.component.scss']
})
export class DwCreatePageModalComponent implements OnInit {

  public frm_pageGroup: FormGroup;
  submitted: boolean = false;
  @ViewChild(ImageCropperComponent, { static: true }) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  containWithinAspectRatio = false;

  constructor(public pageService: PageService, private fb: FormBuilder) {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.pageService.model.croppedImage = event.base64;
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




  ngOnInit() {
    this.frm_pageGroup = this.fb.group({
      name: ['', Validators.required],
      category: [],
      subcategory: ['', Validators.required],
      picture: ['']
    });
  }

  get pageFr() {
    return this.frm_pageGroup.controls;
  }


  savePage() {
    if (this.submitted) {
      return false;
    }
    this.submitted = true;
    if (this.pageFr.name.errors || this.pageFr.subcategory.errors) {
      return false;
    }

    this.pageService.savePage();
  }

  get form() {
    return this.frm_pageGroup.value;
  }

  get a() { return this.frm_pageGroup.controls; }

  selectCategory(cat: PageMainCategory) {
    this.pageService.model.main_category = cat;
  }

}
