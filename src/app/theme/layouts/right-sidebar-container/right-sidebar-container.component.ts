import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, RendererFactory2 } from '@angular/core';
import { DeviceDetectorService } from '@app/libs/device-detector';
import { WbWindowService } from '@app/services/wb-window.service';

@Component({
  selector: 'app-right-sidebar-container',
  templateUrl: './right-sidebar-container.component.html',
  styleUrls: ['./right-sidebar-container.component.scss']
})
export class RightSidebarContainerComponent implements OnInit {

  @ViewChild("rightsidebarSticky", { static: false })
  rightsidebarSticky: ElementRef;
  windowHeight: number;
  private renderer: Renderer2;

  deviceService: DeviceDetectorService;
  constructor(deviceService: DeviceDetectorService, public windowService:WbWindowService) {
    this.windowService.windowHeight = window.innerHeight; //Y) {
    this.deviceService = deviceService;
    this.renderer = this.windowService.renderer;
  }

  ngOnInit() {
  }

  WindowScroll() {
    var elem = this.rightsidebarSticky.nativeElement;
    var wasScrollingDown = true;
    var initialSidebarTop = elem.offsetTop;
    var lastScrollTop = this.windowService.window.scrollY;
    var sidebarHeight = elem.clientHeight; //y

    var windowHeight = this.windowService.windowHeight - 120;

    var scrollTop = this.windowService.window.scrollY;  //Y1

    if (windowHeight > sidebarHeight) {
      if (scrollTop != 0) {
        this.renderer.addClass(elem, 'sidebar-sticked');
        this.renderer.setStyle(elem, 'top', '' + scrollTop + 'px');
      } else {
        this.renderer.removeClass(elem, 'sidebar-sticked');
      }
    } else {
      if ((scrollTop + windowHeight) >= sidebarHeight) {
        this.renderer.addClass(elem, 'sidebar-sticked');
        this.renderer.setStyle(elem, 'top', '' + (scrollTop - (sidebarHeight - windowHeight)) + 'px');
      } else {
        this.renderer.removeClass(elem, 'sidebar-sticked');
      }

    }

    /*
    var scrollBottom = scrollTop + this.windowService.windowHeight;

    var sidebarTop = elem.offsetTop;
    var sidebarBottom = sidebarTop + sidebarHeight;

    var heightDelta = Math.abs(this.windowService.windowHeight - sidebarHeight);
    var scrollDelta = lastScrollTop - scrollTop;

    var isScrollingDown = (scrollTop > lastScrollTop);
    var isWindowLarger = (this.windowService.windowHeight > sidebarHeight);

    if ((isWindowLarger && scrollTop > initialSidebarTop) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
      elem.classList.add('sidebar-fixed');
    } else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
      elem.classList.remove('sidebar-fixed');
    }

    var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
    var dragTopUp = (sidebarTop >= scrollTop && !isScrollingDown);

    if (dragBottomDown) {
      if (isWindowLarger) {
        //elem.style.top = 0;
        this.renderer.setStyle(elem, 'top', '0px');
      } else {
        //elem.style.top = -heightDelta;
        this.renderer.setStyle(elem, 'top', ''+heightDelta+'px');
      }
    } else if (dragTopUp) {
      //elem.style.top = 0;
      this.renderer.setStyle(elem, 'top', '0px');
    } else if (elem.classList.contains('sidebar-fixed')) {
      var currentTop = parseInt(elem.style.top, 10);

      var minTop = -heightDelta;
      var scrolledTop = currentTop + scrollDelta;

      var isPageAtBottom = (scrollTop + this.windowService.windowHeight >= this.windowService.window.innerHeight);
      var newTop = (isPageAtBottom) ? minTop : scrolledTop;

      //elem.style.top = newTop;
      this.renderer.setStyle(elem, 'top', ''+newTop+'px');
    }
    
    lastScrollTop = scrollTop;
    wasScrollingDown = isScrollingDown;
    */
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.WindowScroll();
  }

}
