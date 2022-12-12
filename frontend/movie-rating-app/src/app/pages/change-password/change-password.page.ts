import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  changePassword: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private service: ServicesService,
    private totasterMessage: ToastController
  ) {
    this.changePassword = this.formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      reEnterPassword: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  change() {
    if (this.changePassword.valid) {
      this.service.changePass(this.changePassword.value).subscribe
        (async (result: any) => {
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success",
              duration:2000
            });
            toastr.present();
            this.router.navigate(['/user-profile']);

          }
          else {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "danger",
              duration:2000
            })
            toastr.present();
          }
        })
    }
  }

}
