import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {

  editMovieForm: any;
  Image: any;
  file: any
  id: any

  constructor(
    public formBuilder: FormBuilder,
    private service: ServicesService,
    private totasterMessage: ToastController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editMovieForm = this.formBuilder.group({
      Picture: ['', [Validators.required]],
      description: ['', [Validators.required]],
      collection: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
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

  editMovie() {
    if (this.editMovieForm.valid) {
      let movieData = new FormData();;
      movieData.append("image", this.Image)
      movieData.append("description", this.editMovieForm.value.description)
      movieData.append("collection", this.editMovieForm.value.collection)
      this.service.editMovie(movieData, this.id).subscribe
        (async (result: any) => {
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success"
            });
            toastr.present();
            this.router.navigate(['/homepage'])
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
          }
        })
    }
  }
}
