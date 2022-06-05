import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainLayOutComponent} from "./main-lay-out/main-lay-out.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {GenreBadgeComponent} from "./components/genre-badge/genre-badge.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '', component: MainLayOutComponent, children: [
    {path: '', redirectTo: 'movie', pathMatch: 'full'},
    {path: 'movie', component: MoviesComponent},
    {path:'movie-info',component:MovieInfoComponent},
    {path:'movies',component:MoviesListComponent},
    {path:'genre',component:GenreBadgeComponent},
]}
]
@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
