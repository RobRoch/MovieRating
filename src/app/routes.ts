import { Routes } from '@angular/router';

import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

export const appRoutes:Routes = [
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:id', component: MovieDetailComponent},
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    
]