import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-movie-photos',
  templateUrl: './add-movie-photos.page.html',
  styleUrls: ['./add-movie-photos.page.scss'],
})
export class AddMoviePhotosPage implements OnInit {
  Image: Array<File> = [];
  file: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private totasterMessage: ToastController,
    private router: Router,
    private service: ServicesService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  readURL(event: any): void {
    this.Image = <Array<File>>event.target.files;
    console.log(this.Image, 'Image');
  }

  add() {
    let photosForm = new FormData();

    const files: Array<File> = this.Image;
    console.log(files, 'ghghghghghgh');

    for (let i = 0; i < files.length; i++) {
      photosForm.append('image', files[i], files[i]['name']);
    }

    this.service.addPhotos(this.id, photosForm).subscribe(async (response:any) => {
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
