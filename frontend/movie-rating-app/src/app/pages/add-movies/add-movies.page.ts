import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.page.html',
  styleUrls: ['./add-movies.page.scss'],
})
export class AddMoviesPage implements OnInit {

  addMovieForm: any;
  Image: any;
  file: any

  constructor(
    public formBuilder: FormBuilder,
    private service: ServicesService,
    private totasterMessage: ToastController,
    private router: Router
  ) {

    this.addMovieForm = this.formBuilder.group({
      movie: ['', [Validators.required]],
      Picture: ['', [Validators.required]],
      date: ['', [Validators.required]],
      casts: ['', [Validators.required]],
      director: ['', [Validators.required]],
      producer: ['', [Validators.required]],
      description: ['', [Validators.required]],
      collection: ['', [Validators.required]],
      timing: ['', [Validators.required]],
      writtenBy: ['', [Validators.required]],
      music: ['', [Validators.required]],
      rates: [0],
      storyline: ['', [Validators.required]],
      reviews: [0],
      genre: ['', [Validators.required]],
      budget: ['', [Validators.required]],

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


  addMovie() {
    if (this.addMovieForm.valid) {
      let movieData = new FormData();;
      movieData.append("movie", this.addMovieForm.value.movie)
      movieData.append("image", this.Image)
      movieData.append("date", this.addMovieForm.value.date)
      movieData.append("casts", this.addMovieForm.value.casts)
      movieData.append("director", this.addMovieForm.value.director)
      movieData.append("producer", this.addMovieForm.value.producer)
      movieData.append("description", this.addMovieForm.value.description)
      movieData.append("collection", this.addMovieForm.value.collection)
      movieData.append("timing", this.addMovieForm.value.timing)
      movieData.append("writtenBy", this.addMovieForm.value.writtenBy)
      movieData.append("music", this.addMovieForm.value.music)
      movieData.append("rates", this.addMovieForm.value.rates)
      movieData.append("storyline", this.addMovieForm.value.storyline)
      movieData.append("reviews", this.addMovieForm.value.reviews)
      movieData.append("genre", this.addMovieForm.value.genre)
      movieData.append("budget", this.addMovieForm.value.budget)
      this.service.addMovie(movieData).subscribe
        (async (result: any) => {
          console.log(result, "result")
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success",
              duration: 2000
            });
            toastr.present();
            this.router.navigateByUrl('/homepage')
          }
          else {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "danger",
              duration: 2000
            })
            toastr.present();
          }
        })
    }

  }
}
