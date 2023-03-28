import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  moviesList: any;
  image: any = `http://localhost:8080/`;
  userRole: any;
  allmoviesList: any = [];
  showMovie: number = 4;
  isToken: any;

  constructor(
    private service: ServicesService,
    private router: Router,
    private totasterMessage: ToastController,
    private alertController: AlertController
  ) {
  }

  ngOnInit(): void {

    this.getAllPost();
    this.service.Refresh.subscribe(response => {
      this.getAllPost();
    });

    this.loggedIn();
  };

  showMovieDetails(id: any) {
    this.router.navigate(["/show-movie-details", id])
  }


  loggedIn() {
    this.isToken = localStorage.getItem("userToken");
    return this.isToken
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
          this.allmoviesList = this.moviesList.slice(0, this.showMovie);
          const toastr = await this.totasterMessage.create({
            position: "top",
            message: result.message.message,
            color: "success",
            duration: 2000
          });
          // toastr.present();
        }
      });
  };

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.showMovie += 4;
      this.allmoviesList = this.moviesList.slice(0, this.showMovie);
      event.target.complete();
      if (this.allmoviesList.length == this.moviesList.length) {
        event.target.disabled = true
      }
    }, 1000);
  }

  addMovies() {
    this.router.navigate(["/add-movies"])
  }

  rateMovie(id: any) {

    if (this.isToken) {
      this.service.rateToMovie(id).subscribe
        (async (result: any) => {

          if (result.message) {
            const alert = await this.alertController.create({
              header: 'Success Message',
              message: result.message.message,
              buttons: ['OK'],
              
            });
            await alert.present();
          }
          else {
            const alert = await this.alertController.create({
              header: 'Error Message',
              message: result.error.message,
              buttons: ['OK'],
            });
            await alert.present();
          }
        })
    }
    else {
      this.router.navigateByUrl("/login")
    }
  };

}
