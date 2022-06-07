import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainLayOutComponent} from "./main-lay-out/main-lay-out.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {GenreBadgeComponent} from "./components/genre-badge/genre-badge.component";
import {CommonModule} from "@angular/common";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [{
  path: '', component: MainLayOutComponent, children: [
    {path: '', redirectTo: 'movie', pathMatch: 'full'},
    {path: 'movie', component: MoviesListComponent},
    {path:'movie/:id',component:MovieInfoComponent},
    {path:'genre',component:GenreBadgeComponent},
    {path:'search',component:SearchComponent}
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
