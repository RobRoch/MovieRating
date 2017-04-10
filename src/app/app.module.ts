import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './movies/search-bar/search-bar.component';
import { MovieService } from './services/movie.service';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { appRoutes } from './routes';
import { MoviesComponent } from './movies/movies.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    FooterComponent,
    SearchBarComponent,
    MovieDetailComponent,
    MoviesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
