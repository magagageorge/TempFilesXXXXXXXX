import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dw-mobile-app-welcome',
  templateUrl: './dw-mobile-app-welcome.component.html',
  styleUrls: ['./dw-mobile-app-welcome.component.scss']
})
export class DwMobileAppWelcomeComponent implements OnInit, AfterViewInit {

  @ViewChild("viewContainer", { static: false })
  viewContainer: ElementRef;
  viewContainerWidth: number;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.viewContainerWidth = this.viewContainer.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
