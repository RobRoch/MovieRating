//Imported ElementRef to take reference from html to my methods in component??????????
import { Component, OnInit} from '@angular/core';

//Called ActivatedRoute to access parameters of 
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
  

  // assigning my movie class to IMovie model.
  movie:IMovie;
  rating:IRating[];
  value5:String;

  // assigning my movieService from movie.service.ts
  // same with route, taking from @angular/router/
  constructor(private movieService: MovieService,
              private ratingService: RatingService,
              private route:ActivatedRoute) {
  }

  // + makes a number from String, getMovie() needs a number :id
  // i'm assigning this.movie to be one from getMovie() method.
  // getMovie(id) needs movie.id, when i click on card this route.snapshot.params "knows" which one got what id.
  ngOnInit() {
    this.movie = this.movieService.getMovie(
      +this.route.snapshot.params['id']);

  //getMovieRating() used 'id' from route.snapshot.params.
    console.log(this.rating = this.ratingService.getMovieRating(+this.route.snapshot.params['id']))

  //My value5 is binded.
  //Don't wanna make 5 values for each progress. Gonna figure it out.
    console.log(this.value5 = this.ratingService.getStar(this.rating, 5).toString())
  }

  

  //Ok i'm gonna try to get values here. I need IRating model to receive but for now I'll get just value.
  getRating(formValues) {
    console.log(formValues.rating);
  }

}
