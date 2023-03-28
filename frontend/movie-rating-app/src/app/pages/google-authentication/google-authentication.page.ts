import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-google-authentication',
  templateUrl: './google-authentication.page.html',
  styleUrls: ['./google-authentication.page.scss'],
})
export class GoogleAuthenticationPage implements OnInit {

  cookieValue: any

  constructor(private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('token');    
    
    localStorage.setItem('userToken', this.cookieValue);    
    
    this.router.navigate(['/homepage']);
  }

}
