import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent implements OnInit {
  

  constructor(private content: IonContent) { }

  ngOnInit() { }
  scrollToTop() {
    console.log("@calling")
    this.content.scrollToTop(300); // 300 milliseconds for scrolling to the top
  }

}
