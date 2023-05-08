import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-casts-details',
  templateUrl: './add-casts-details.page.html',
  styleUrls: ['./add-casts-details.page.scss'],
})
export class AddCastsDetailsPage implements OnInit {
  public castImageForm: any = FormGroup;
  Image: Array<File> = [];
  file: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServicesService,
    private route: ActivatedRoute,
    private totasterMessage: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.castImageForm = this.formBuilder.group({
      castInfo: this.formBuilder.array([this.addInputFields()]),
    });
  }

  get castInfo() {
    return this.castImageForm.controls['castInfo'] as FormArray;
  }

  readURL(event: any): void {
    // this.Image = event.target.files;
    console.log(event.target.files, 'event.target.files');

    this.Image = <Array<File>>event.target.files;
    console.log(this.Image, 'Image');

    // if (event.target.files && event.target.files[0]) {
    //   let file = event.target.files[0];

    //   const reader = new FileReader();
    //   reader.onload = e => this.file = reader.result;

    //   reader.readAsDataURL(file);
    // }
  }

  addInputFields(): FormGroup {
    const formData = this.formBuilder.group({
      castName: ['', Validators.required],
      // castImage: ['', Validators.required],
    });

    return formData;
  }

  addQuantity() {
    const control = <FormArray>this.castImageForm.controls.castInfo;

    control.push(this.addInputFields());
  }

  submitCastInfo() {
    if (this.castImageForm.valid) {
      const movieData: any = new FormData();
      const files: Array<File> = this.Image;
      const nameArray = this.castImageForm.value.castInfo;

      for (let i = 0; i < files.length; i++) {
        movieData.append('image', files[i], files[i]['name']);
      }
      for (let i = 0; i < nameArray.length; i++) {
        movieData.append('castName', nameArray[i].castName);
      }

      this.service
        .addCasts(this.id, movieData)
        .subscribe(async (response: any) => {
          let toastr;
          if (response.message) {
            toastr = await this.totasterMessage.create({
              position: 'top',
              message: response.message.message,
              color: 'success',
              duration: 2000,
            });
            this.router.navigate(['/show-movie-details', this.id]);

          } else {
            toastr = await this.totasterMessage.create({
              position: 'top',
              message: response.error.error,
              color: 'danger',
              duration: 2000,
            });
          }
          toastr.present();
        });
    }
  }
}
