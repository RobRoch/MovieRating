import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MovieService } from './services/movie.service';
import { RatingService } from './services/rating.service';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    FooterComponent,
    MovieDetailComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MovieService,
    RatingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
