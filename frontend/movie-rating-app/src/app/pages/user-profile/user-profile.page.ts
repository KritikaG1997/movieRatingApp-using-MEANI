import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userData:any = [];

  constructor(
    private service: ServicesService,
    private totasterMessage: ToastController
    ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.profile().subscribe
      (async(result: any) => {
        if (result.message.status == 200) {
          this.userData = result.result;
          console.log(this.userData)
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success"
          });
          // toastr.present();
        }
  })
}
}
