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
  rating: IRating[];

  //TODO maxValue - maybe after BehaviorSubject?
  //maxValue:String;

  value5: String;
  value4: String;
  value3: String;
  value2: String;
  value1: String;

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

  //Using paramId to get specific Ratings.
  getRatings(): void {
    this.ratingService.getMovieRating(this.paramId).subscribe((rating) => this.rating = rating);
  }


  //Don't know how to bind observable to variable (BehaviorSubject maybe??). Hardcoded all 5 values.
  //It doesn't look good, but at the moment i have no idea how to make it better. Need feedback from someone.
  getRating(): void {
    this.ratingService.getStar(this.paramId, 5).subscribe(rating => this.value5 = rating);
    this.ratingService.getStar(this.paramId, 4).subscribe(rating => this.value4 = rating);
    this.ratingService.getStar(this.paramId, 3).subscribe(rating => this.value3 = rating);
    this.ratingService.getStar(this.paramId, 2).subscribe(rating => this.value2 = rating);
    this.ratingService.getStar(this.paramId, 1).subscribe(rating => this.value1 = rating);
  }


  ngOnInit() {
    this.getMovie();
    this.getRatings();
    this.getRating();
  }

  //pushing values using saveRating method and formValues from Form in html. Taking paramId to push directly to movie.
  //after push i'm getting rating again, and i'm DOWNLOADING all the 5 ratings again. Very big issue.
  saveRating(formValues) {
    this.ratingService.saveRating(this.paramId, formValues).subscribe(rating => {
      console.log(rating)
      this.getRating()
    });
  }
}

