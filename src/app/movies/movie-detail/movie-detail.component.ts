import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
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
  

  // assigning my movie class to IMovie model etc. I can use movie,rating etc in html later.
  movie:IMovie;
  rating:IRating[];
  maxValue:String;
  value5:String;
  value4:String;
  value3:String;
  value2:String;
  value1:String;
  rated:IRating;
  id:number;
  paramId:number=+this.route.snapshot.params['id']
  Math:any;


  // assigning my movieService from movie.service.ts etc.
  // same with route, taking from @angular/router/
  constructor(private movieService: MovieService,
              private ratingService: RatingService,
              private route:ActivatedRoute,
              private router: Router) {

              this.Math = Math;
  }

  getRatings():void {
    this.ratingService.getMovieRating(this.paramId).subscribe((rating) => this.rating = rating);
  }

  getRating():void {
    this.ratingService.getStar(this.paramId, 5).subscribe(rating => this.value5 = rating);
    this.ratingService.getStar(this.paramId, 4).subscribe(rating => this.value4 = rating);
    this.ratingService.getStar(this.paramId, 3).subscribe(rating => this.value3 = rating);
    this.ratingService.getStar(this.paramId, 2).subscribe(rating => this.value2 = rating);
    this.ratingService.getStar(this.paramId, 1).subscribe(rating => this.value1 = rating);
  }
  // + makes a number from String, getMovie() needs a number :id
  // i'm assigning this.movie to be one from getMovie() method.
  // getMovie(id) needs movie.id, when i click on card this route.snapshot.params "knows" which one got what id.
  
  ngOnInit() {

    this.movieService.getMovie(this.paramId).subscribe(movie => this.movie = movie);

  //getMovieRating() used 'id' from route.snapshot.params.
  //I DONT NEED THIS ANY MORE
   
    this.getRatings(); 
    this.getRating();
    
  // this.ratingService.getAverageRating(this.paramId).subscribe(avrRating => console.log(avrRating));


  //My value is binded.
  //Don't wanna make 5 values for each progress. Gonna figure it out somehow.
  //I shouldn't access DOM and put values from DOM to Angular. It's other way around.
  //And i shouldn't use ElementRef, so i guess i'll just make 5 values for now.
  //I could try loop but no idea how to implement my values to diff progress bars. this.(value+{{n}}) = this.ratingService.getStar(this.rating, {{n}})? sth like that.
    
    // this.value4 = this.ratingService.getStar(this.rating, 4);
    // this.value3 = this.ratingService.getStar(this.rating, 3);
    // this.value2 = this.ratingService.getStar(this.rating, 2);
    // this.value1 = this.ratingService.getStar(this.rating, 1);
  }

    //OLD CODE
  //maxValue will be highest of those 5.
    // this.maxValue = Math.max(+this.value1,
    //                          +this.value2,
    //                          +this.value3,
    //                          +this.value4,
    //                          +this.value5).toString();
    // console.log(this.maxValue);
  //averageRating gives 2 decimal places.
    // this.averageRating = this.ratingService.getAverageRating(this.rating);

    saveRating(formValues){
      this.ratingService.saveRating(this.paramId, formValues).subscribe(rating => {
        console.log(rating)
        this.getRating()});
    }

      //     console.log(this.rated = {
      // "id":this.id,
      // "movie_id":+this.route.snapshot.params['id'],
      // "rating":formValues.rating

    // //taking highest id from array +1
    // this.id = this.ratingService.getHighestId(this.rating)+1;
    // //getting :IRating with diff id, movie_id param and our formValue.

    // //i Guess that's enough for now. I need to push it anyway with http.
    // console.log(this.rating = this.rating.concat(this.rated));
}

