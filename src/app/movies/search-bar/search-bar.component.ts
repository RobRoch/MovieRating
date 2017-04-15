import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

//Should i Output my [movie]?
  searchTerm: string = "";
  foundMovies: IMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }


  
}
