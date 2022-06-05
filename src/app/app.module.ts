import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HTTP_INTERCEPTORS,HttpClientModule} from "@angular/common/http";
import {MoviesComponent} from "./components/movies/movies.component";
import {MainLayOutComponent} from "./main-lay-out/main-lay-out.component";
import {AppRoutingModule} from "./app-routing.module";
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {MainInterceptor} from "./main.interceptor";
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchComponent} from "./components/search/search.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MainLayOutComponent,
    MovieInfoComponent,
    GenreBadgeComponent,
    PaginationComponent,
    StarRatingComponent,
    MoviesListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
