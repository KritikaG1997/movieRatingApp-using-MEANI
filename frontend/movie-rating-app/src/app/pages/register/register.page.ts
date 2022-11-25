import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: any;
  userRole:any=["User","Admin"];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private service: ServicesService,
    private totasterMessage: ToastController
  ) {
    this.registerForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.valid) {
      this.service.signupUser(this.registerForm.value).subscribe
        (async (result: any) => {
          console.log(result)
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success"
            });
            toastr.present();
            this.router.navigate(['/login'])
                .then(() => {
                  window.location.reload();
                });
          }
          else {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "danger"
            })
            toastr.present();
          };
        });
    };
  };

  login(){
    this.router.navigateByUrl("/login")
  }

}
