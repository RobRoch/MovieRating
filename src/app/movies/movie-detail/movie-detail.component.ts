import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/movie.model';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie:IMovie;
  
  constructor(private movieService: MovieService,
              private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.movie = this.movieService.getMovie(
      +this.route.snapshot.params['id']);
  }

}
