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
  userRole: any = ["User", "Admin"];
  Image: any;
  file: any


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
      Picture: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  readURL(event: any): void {

    this.Image = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.file = reader.result;

      reader.readAsDataURL(file);

    }
  }

  register() {
    if (this.registerForm.valid) {
      let userData = new FormData();;
      userData.append("role", this.registerForm.value.role)
      userData.append("name", this.registerForm.value.name)
      userData.append("email", this.registerForm.value.email)
      userData.append("image", this.Image)
      userData.append("Country", this.registerForm.value.Country)
      userData.append("password", this.registerForm.value.password)
      userData.append("confirm_password", this.registerForm.value.confirm_password)
      this.service.signupUser(userData).subscribe
        (async (result: any) => {
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

  login() {
    this.router.navigateByUrl("/login")
  }

}
