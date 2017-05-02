import { Component, OnInit } from '@angular/core';
//Called ActivatedRoute to access my movie cards' id.
import { ActivatedRoute } from '@angular/router'
import { MovieService } from '../../services/movie.service';
import { RatingService } from '../../services/rating.service';
import { IMovie } from '../../models/movie.model';
import { IRating } from '../../models/rating.model';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  // Declaring my variables to models etc.
  movie: IMovie;
  rating: Array<any> = [];
  value5: String;
  value4: String;
  value3: String;
  value2: String;
  value1: String;
  isError: boolean = false;
  isError2: boolean = true;
  formValues:number;
  //Using this.route.snapshot.params to get current id, i can push it later to my methods.
  paramId: number = +this.route.snapshot.params['id']
  Math: any;

  constructor(private movieService: MovieService,
              private ratingService: RatingService,
              private route: ActivatedRoute) {
    //used Math to make calculations in html. I don't think it's good idea, but it's working for now.
    this.Math = Math;
  }

  //Using paramId to get specific Movie.
  getMovie(): void {
    this.movieService.getMovie(this.paramId).subscribe(movie => this.movie = movie);
  }

  // Using paramId to get specific Ratings. I don't need this for now.
  getRatings(): void {
    this.ratingService.getMovieRating(this.paramId);
    this.ratingService.currentRating.subscribe((rating: Array<any>) => {
        this.rating = rating;
        this.value5 = this.rating.filter((rating) => rating.rating == 5).length.toString();
        this.value4 = this.rating.filter((rating) => rating.rating == 4).length.toString();
        this.value3 = this.rating.filter((rating) => rating.rating == 3).length.toString();
        this.value2 = this.rating.filter((rating) => rating.rating == 2).length.toString();
        this.value1 = this.rating.filter((rating) => rating.rating == 1).length.toString();
      });
  }

  ngOnInit() {
    this.getMovie();
    this.getRatings();
  }

  //pushing values using saveRating method and formValues from Form in html. Taking paramId to push directly to movie.
  //after push i'm doin this.getRatings() to update my data.
  saveRating(formValues) {
    if(formValues.rating == null) {
      console.log(formValues)
      this.isError = true;
      this.isError2 = false;
    }
    else {
      this.ratingService.saveRating(this.paramId, formValues).subscribe(rating => {
      console.log(rating)
      this.isError = false;
      this.isError2 = true;
      this.getRatings()});
    };
  }
}

