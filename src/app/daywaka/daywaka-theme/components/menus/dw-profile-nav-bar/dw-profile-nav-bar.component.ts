import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@app/auth';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';

@Component({
  selector: 'app-dw-profile-nav-bar',
  templateUrl: './dw-profile-nav-bar.component.html',
  styleUrls: ['./dw-profile-nav-bar.component.scss']
})
export class DwProfileNavBarComponent implements OnInit {

  @Input() TOPNAV_TITLE: string;
  is_authenticated: boolean = false;
  leftMenuVisible = false;
  leftMenu: HTMLElement;
  constructor(public daywakaService: DaywakaService, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((authenticated: any) => {
      this.is_authenticated = authenticated;
    });
  }

  getInitLetter(name: string) {
    return (name.substr(0, 1)).toUpperCase();
  }

  toogleLeftMenu() {
    this.leftMenu = document.getElementById("dw-mobile-left-menu") as HTMLElement;
    if (this.leftMenuVisible == true) {
      this.leftMenuVisible = false;
      this.leftMenu.classList.remove('menu-opened');
    } else {
      this.leftMenuVisible = true;
      this.leftMenu.classList.add('menu-opened');
    }
  }

}
