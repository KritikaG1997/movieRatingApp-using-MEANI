import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imra-login',
  templateUrl: './imra-login.page.html',
  styleUrls: ['./imra-login.page.scss'],
})
export class ImraLoginPage implements OnInit {

  constructor(private route:Router) {
    console.log("hello kikku");
    
   }

  ngOnInit() {
  }

  signIn(){
    
  }
  

}
