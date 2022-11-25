import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private service: ServicesService,
    private totasterMessage: ToastController
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {

  }


  login() {
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe
        (async (result: any) => {
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success"
            });
            toastr.present();
            localStorage.setItem("userToken", result.token);
            localStorage.setItem("role", result.user.role);
            this.router.navigate(['/homepage']);

          }
          else {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "danger"
            })
            toastr.present();
          }
        })
    }
  }

  register() {
    this.router.navigateByUrl("/register")
  }

}
