import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../models/movie.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  //pushing movie params to movie-list.component.html from [movie] in movies.component.html - WRONG
  //it's taking movie from movies from our parent component - and now i can use movie params in my html etc.
  @Input() movie:IMovie;
  
  constructor() { }

  ngOnInit() {
  }

  
}
