// need Routes to make routing work!
import { Routes } from '@angular/router';

// and components of course.
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

export const appRoutes:Routes = [
    { path: 'movies', component: MoviesComponent },
    //using :id parameter to access MovieDetails.
    { path: 'movies/:id', component: MovieDetailComponent},
    //empty path redirects to MoviesComponent.
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    //random path that is not in my base, it's gonna be MovieComponent again
    { path: '**', redirectTo: '/movies', pathMatch: 'full'}
]