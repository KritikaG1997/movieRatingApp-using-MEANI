import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // forRatings: string = 'false';
  // forMovieList: string = 'false';
  // forComments: string = 'false';

  activeButton: string = 'button1';


  constructor() { }

  ngOnInit() {
  }

  // ratings() {
  //   if (this.forMovieList == 'true' || this.forComments == 'true') {
  //     this.forRatings = 'true'
  //     this.forComments = 'false'
  //     this.forMovieList = 'false'
  //   }
  //   else {
  //     this.forRatings = 'true'
  //   }
  //   console.log(this.forRatings, "forRatings", this.forComments, "this.forComments", this.forMovieList, "this.forMovieList", "   ====1");

  // }

  // List() {
  //   if (this.forRatings == 'true' || this.forComments == 'true') {
  //     this.forRatings = 'false'
  //     this.forComments = 'false'
  //     this.forMovieList = 'true'
  //   }
  //   else {
  //     this.forMovieList = 'true'
  //   }
  //   console.log(this.forRatings, "forRatings", this.forComments, "this.forComments", this.forMovieList, "this.forMovieList", "   ====2");

  // }

  // comments() {
  //   if (this.forRatings == 'true' || this.forMovieList == 'true') {
  //     this.forRatings = 'false'
  //     this.forMovieList = 'false'
  //     this.forComments = 'true'
  //   }
  //   else {
  //     this.forComments = 'true'
  //   }
  //   console.log(this.forRatings, "forRatings", this.forComments, "this.forComments", this.forMovieList, "this.forMovieList", "   ====3");

  // }

}
