import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  //Declaring my movies to be array of IMovie[] model etc.
  movies: IMovie[];
  //Made filteredMovies and sortedMovies arrays to show them or compare in methods.
  filteredMovies: IMovie[];
  sortedMovies: IMovie[];
  searchTerm: String;

  constructor(private movieService: MovieService) {
   }

  // i wanna receive movies so i'm calling service with my method getMovies().
  //taking this.movies and when filtering them assigning to movies values.
  getMovies():void {
    this.movieService.getMovies().subscribe(movies => this.movies = this.filteredMovies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

  //Assigning to filteredMovies and then replacing this.movies with this.
  searchMovies(searchTerm) {
    searchTerm.toLowerCase();
    this.filteredMovies = this.movies.filter(movies => movies.title.toLowerCase().includes(searchTerm))
  }

  //Trying not to use pipe, sorting and searching shouldn't be done by pipe - Angular Team.
  //Pushing data to new sortedMovies and checking if it's sorted already.
  //Sort ascending, and when it's done, it reverses array on next click and so on. (normal -> asc -> desc -> asc -> desc etc..)
  sortBy() {
    if (this.sortedMovies != this.filteredMovies) {
      this.sortedMovies = this.filteredMovies.sort(function (m1: IMovie, m2: IMovie) {
        var movieA = m1.title.toLowerCase(), movieB = m2.title.toLowerCase();
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
      })}
    else {
      this.sortedMovies.reverse();
    }
  }
}
