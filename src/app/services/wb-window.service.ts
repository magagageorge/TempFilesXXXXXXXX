import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { WINDOW } from '@app/libs/window';

@Injectable({
  providedIn: 'root'
})
export class WbWindowService {

  public renderer: Renderer2;
  windowHeight: number;
  windowWidth:number;
  constructor(@Inject(WINDOW) public window: any, rendererFactory: RendererFactory2) {
    this.windowHeight = window.innerHeight; //Y
    this.windowWidth = window.innerWidth; //X
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  /*
    onWindowScroll(sidebar: ElementRef) {
      var wasScrollingDown = true;
      var initialSidebarTop = sidebar.nativeElement.offsetTop;
      var lastScrollTop = this.window.scrollY;
      var sidebarHeight = sidebar.nativeElement.clientHeight; //y
  
      var scrollTop = this.window.scrollY;  //Y1
  
      console.log('Y='+this.windowHeight+'; Y1='+scrollTop+'; y='+sidebarHeight);
  
      if(this.windowHeight>sidebarHeight){
        if(scrollTop!=0){
          sidebar.nativeElement.classList.add('sidebar-fixed');
          sidebar.nativeElement.style.top = scrollTop;
          this.renderer.setStyle(sidebar.nativeElement, 'background', 'red');
        }else{
          sidebar.nativeElement.classList.remove('sidebar-fixed');
        }
      }
      
      var scrollBottom = scrollTop + this.windowHeight;
  
      var sidebarTop = sidebar.nativeElement.offsetTop;
      var sidebarBottom = sidebarTop + sidebarHeight;
  
      var heightDelta = Math.abs(this.windowHeight - sidebarHeight);
      var scrollDelta = lastScrollTop - scrollTop;
  
      var isScrollingDown = (scrollTop > lastScrollTop);
      var isWindowLarger = (this.windowHeight > sidebarHeight);
  
      if ((isWindowLarger && scrollTop > initialSidebarTop) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
        sidebar.nativeElement.classList.add('sidebar-fixed');
      } else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
        sidebar.nativeElement.classList.remove('sidebar-fixed');
      }
  
      var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
      var dragTopUp = (sidebarTop >= scrollTop && !isScrollingDown);
  
      if (dragBottomDown) {
        if (isWindowLarger) {
          sidebar.nativeElement.style.top = 0;
        } else {
          sidebar.nativeElement.style.top = -heightDelta;
        }
      } else if (dragTopUp) {
        sidebar.nativeElement.style.top = 0;
      } else if (sidebar.nativeElement.classList.contains('sidebar-fixed')) {
        var currentTop = parseInt(sidebar.nativeElement.style.top, 10);
  
        var minTop = -heightDelta;
        var scrolledTop = currentTop + scrollDelta;
  
        var isPageAtBottom = (scrollTop + this.windowHeight >= this.window.innerHeight);
        var newTop = (isPageAtBottom) ? minTop : scrolledTop;
  
        sidebar.nativeElement.style.top = newTop;
      }
  
      lastScrollTop = scrollTop;
      wasScrollingDown = isScrollingDown;
      
    }
  */

  /*
  $(function() {

    var $window = $(window);
    var lastScrollTop = $window.scrollTop();
    var wasScrollingDown = true;

    var sidebar = $("#sidebar");
    if (sidebar.length > 0) {

      var initialSidebarTop = sidebar.position().top;

      $window.scroll(function (event) {


      });
    }
  });

  */


}
