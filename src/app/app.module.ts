import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { JQUERY_PROVIDER } from './services/jQuery.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './movies/search-bar/search-bar.component';
import { MovieService } from './services/movie.service';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { appRoutes } from './routes';
import { MoviesComponent } from './movies/movies.component';
import { VoteModalComponent } from './movies/vote-modal/vote-modal.component';
import { ModalTriggerDirective } from './triggers/modal-trigger.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    FooterComponent,
    SearchBarComponent,
    MovieDetailComponent,
    MoviesComponent,
    VoteModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService,
    JQUERY_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
