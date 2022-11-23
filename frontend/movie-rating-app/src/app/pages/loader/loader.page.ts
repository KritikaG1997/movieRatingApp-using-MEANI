import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedUser();
  }

  loggedUser() {
    const token = localStorage.getItem("userToken")
    if (token) {
      setTimeout(() => {
        this.router.navigate(["/homepage"]);
      }, 1000);
    }
    else {
      setTimeout(() => {
        this.router.navigate(["/login"]);
      }, 1000);
    }
  }

}
