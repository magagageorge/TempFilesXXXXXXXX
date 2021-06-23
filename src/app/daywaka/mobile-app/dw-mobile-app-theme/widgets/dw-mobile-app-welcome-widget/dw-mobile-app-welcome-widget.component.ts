import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ImageIconsService } from '@app/services/image-icons.service';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-dw-mobile-app-welcome-widget',
  templateUrl: './dw-mobile-app-welcome-widget.component.html',
  styleUrls: ['./dw-mobile-app-welcome-widget.component.scss']
})
export class DwMobileAppWelcomeWidgetComponent implements OnInit {

  @Input() containerWidth: number;
  currentViewCardIndex: number = 0;
  positionLeft: number = 0;
  @ViewChild("viewSlider", { static: false })
  viewSlider: ElementRef;
  autoSliderSubscription: Subscription;

  constructor(public imageIconsService: ImageIconsService, private renderer: Renderer2) { }


  cards = [
    {
      title: 'Card Title 1',
      info: 'Find jobs that fits your Lifestyle. No Resumes. No Interview',
      description: '',
      buttonText: 'Button',
      media: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg',
      media_width: 708,
      media_height: 472,
      media_wh_ratio: 1.5

    },
    {
      title: '',
      info: 'Gep Paid Quickly',
      description: 'Withing 1 - 3 Business Days',
      buttonText: 'Button',
      media: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg',
      media_width: 708,
      media_height: 472,
      media_wh_ratio: 1.5
    },
    {
      title: 'Card Title 3',
      info: '',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      media: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(13).jpg',
      media_width: 708,
      media_height: 472,
      media_wh_ratio: 1.5
    },
    {
      title: 'Card Title 4',
      info: '',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      media: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(20).jpg',
      media_width: 708,
      media_height: 472,
      media_wh_ratio: 1.5
    },
  ];

  ngOnInit() {
    this.subscribeAutoSlider();
  }

  viewNextCard(auto: boolean) {
    if (auto != true) {
      this.autoSliderSubscription.unsubscribe();
      this.subscribeAutoSlider();
    }
    if (this.cards.length > (this.currentViewCardIndex + 1)) {
      this.renderer.addClass(this.viewSlider.nativeElement, "fourSlidesInRight");
      setTimeout(() => {
        this.currentViewCardIndex = this.currentViewCardIndex + 1;
        var left = this.getPositionLeft() as number;
        if ((this.currentViewCardIndex + 1) == this.cards.length) {
          //left = left + this.containerWidth;
        }
        this.positionLeft = left;
        this.renderer.removeClass(this.viewSlider.nativeElement, "fourSlidesInRight");
      }, 1000);
    } else {
      this.renderer.addClass(this.viewSlider.nativeElement, "flipInX");
      setTimeout(() => {
        this.currentViewCardIndex = 0;
        this.positionLeft = 0;
        this.renderer.removeClass(this.viewSlider.nativeElement, "flipInX");
      }, 400);
    }
  }

  viewPreviousCard(auto: boolean) {
    if (auto != true) {
      this.autoSliderSubscription.unsubscribe();
      this.subscribeAutoSlider();
    }
    if (this.currentViewCardIndex > 0) {
      this.renderer.addClass(this.viewSlider.nativeElement, "fourSlidesInLeft");
      setTimeout(() => {
        this.currentViewCardIndex = this.currentViewCardIndex - 1;
        if (this.currentViewCardIndex == 0) {
          this.positionLeft = 0;
        } else {
          this.positionLeft = this.getPositionLeft();
        }
        this.renderer.removeClass(this.viewSlider.nativeElement, "fourSlidesInLeft");
      }, 1000);
    }

  }

  getPositionLeft() {
    var left = (this.containerWidth + ((this.containerWidth) * (this.currentViewCardIndex - 1))) as number;

    if (left > 0) {
      return (-left);
    }
    return 0;
  }

  cardsContainerWidth(): number {
    return (this.containerWidth * this.cards.length);
  }

  onSwipe(event) {
    /*
    const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";
    const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : "";
    this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
    */
    if (event.deltaX > 0) {
      this.viewPreviousCard(false);
    } else {
      this.viewNextCard(false);
    }
  }

  subscribeAutoSlider() {
    var _this = this;
    this.autoSliderSubscription = Observable.interval(5000)
      .subscribe((val) => { _this.viewNextCard(true); });
  }

}

