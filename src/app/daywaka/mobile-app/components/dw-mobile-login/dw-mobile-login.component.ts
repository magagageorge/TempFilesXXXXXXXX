import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dw-mobile-login',
  templateUrl: './dw-mobile-login.component.html',
  styleUrls: ['./dw-mobile-login.component.scss']
})
export class DwMobileLoginComponent implements OnInit {

  title: string;
  @ViewChild("pageAnimate", { static: false })
  pageAnimate: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.title = "Login";
  }

  onPageLeave(status: boolean) {
    if (status) {
      this.renderer.addClass(this.pageAnimate.nativeElement, "slideInLeft");
    }
  }

}
