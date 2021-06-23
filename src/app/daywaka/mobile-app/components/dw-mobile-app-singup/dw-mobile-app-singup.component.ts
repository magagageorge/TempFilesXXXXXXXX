import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dw-mobile-app-singup',
  templateUrl: './dw-mobile-app-singup.component.html',
  styleUrls: ['./dw-mobile-app-singup.component.scss']
})
export class DwMobileAppSingupComponent implements OnInit {

  title: string;
  @ViewChild("pageAnimate", { static: false })
  pageAnimate: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.title = "Sign Up";
  }

  onPageLeave(status: boolean) {
    if (status) {
      this.renderer.addClass(this.pageAnimate.nativeElement, "slideInLeft");
    }
  }
}
