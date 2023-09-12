import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-and-privacy',
  templateUrl: './conditions-and-privacy.page.html',
  styleUrls: ['./conditions-and-privacy.page.scss'],
})
export class ConditionsAndPrivacyPage implements OnInit {

  chooseScreen:string = "condition"

  constructor() { }

  ngOnInit() {
  }

}
