import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.page.html',
  styleUrls: ['./show-movie-details.page.scss'],
})
export class ShowMovieDetailsPage implements OnInit {
  movieArray: any = [];
  id: any;
  image: any = `http://localhost:8080/`;
  castsArray: any;
  count: any = 5;
  moviePhotosArray:any;

  constructor(
    private service: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie();
  }

  getMovie() {
    this.service.getMovieById(this.id).subscribe(async (result: any) => {
      if (result.message.status == 200) {
        this.movieArray = result.result;
        this.castsArray = result.result.castsInfo;
        this.moviePhotosArray = result.result.moviePhotos;
        console.log(this.movieArray, 'moviePhotosArray', this.moviePhotosArray);
      }
    });
  }

  addMovieCast(id: any) {
    this.router.navigate(['/add-casts-details', id]);
  }

  addPhotos(id: any) {
    this.router.navigate(['/add-movie-photos', id]);
  }
}
