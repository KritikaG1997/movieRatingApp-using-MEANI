import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  menu: string = 'false'

  ngOnInit() { }

  loggedIn() {
    return true
  }

  loggedOut() {
    return false
  }

  isMenuOpen() {
    console.log("coming");

    if (this.menu == 'false') {
      this.menu = 'true'
    }
    else {
      this.menu = 'false'
    }
  }
}
