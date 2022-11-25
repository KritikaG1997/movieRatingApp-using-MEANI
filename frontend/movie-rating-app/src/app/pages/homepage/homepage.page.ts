import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  moviesList: any;
  image: any = `http://localhost:8080/`;
  userRole: any

  constructor(
    private service: ServicesService,
    private router: Router,
    private totasterMessage: ToastController,
  ) {
  }

  ngOnInit(): void {
    this.getAllPost();
    this.service.Refresh.subscribe(response => {
      this.getAllPost();
    });

    this.loggedIn();
  };


  loggedIn() {
    return localStorage.getItem("role");
  }


  logout() {
    this.router.navigate(["/login"])
    localStorage.removeItem("userToken");
    localStorage.removeItem("role");
  }

  getAllPost() {
    this.service.getAllMovies().subscribe
      (async (result: any) => {
        if (result.message.status == 200) {
          this.moviesList = result.result;
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success"
          });
          // toastr.present();
        }
      });
  };

  addMovies() {
    this.router.navigate(["/add-movies"])
  }

  rateMovie(id: any) {
    this.service.rateToMovie(id).subscribe
      (async (result: any) => {
        if (result.message.status == 200) {
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success"
          });
          toastr.present();
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

  editMovies(id: any) {
    this.router.navigate(["/edit-movie", id])
  }

  deleteMovie(id: any) {
    this.service.delete(id).subscribe
      (async (result: any) => {
        if (result.message.status == 200) {
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success"
          });
          toastr.present();
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
  }

}
