import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userData: any = [];
  image: any = `http://localhost:8080/`;
  userPostList: any = [];
  showMovie: any = 2;
  moviesList: any = [];

  constructor(
    private service: ServicesService,
    private totasterMessage: ToastController,
    private router: Router
  ) {
    // this.moviesList = this.userPostList.slice(0, this.showMovie);
  }

  ngOnInit() {
    this.getProfile();
    this.getPostByUser();
    this.service.Refresh.subscribe(response => {
      this.getPostByUser();
    });
  }

  getProfile() {
    this.service.profile().subscribe
      (async (result: any) => {
        if (result.message.status == 200) {
          this.userData = result.result;
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success"
          });
          // toastr.present();
        }
      });
  };

  getPostByUser() {
    this.service.getPostById().subscribe
      (async (result: any) => {
        if (result.message.status == 200) {
          this.userPostList = result.result
          this.moviesList = this.userPostList.slice(0, this.showMovie);

          // const toastr = await this.totasterMessage.create({
          //   position: "top",
          //   message: result.message.message,
          //   color: "success"
          // });
          // toastr.present();
        }
      });
  };

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.showMovie += 2;
      this.moviesList = this.userPostList.slice(0, this.showMovie);
      event.target.complete();
      if (this.moviesList.length == this.userPostList.length) {
        event.target.disabled = true
      }
    }, 1000);
  }

  editMovies(id: any) {
    this.router.navigate(["/edit-movie", id])
  }

  deleteMovie(id: any, name: any) {
    if (confirm("Are you sure to delete " + name)) {
      this.service.delete(id).subscribe
        (async (result: any) => {
          if (result.message.status == 200) {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "success"
            });
            // toastr.present();
          }
          else {
            const toastr = await this.totasterMessage.create({
              position: "top",
              message: result.message.message,
              color: "danger"
            });
            toastr.present();
          }
        })
    };
  };

};
