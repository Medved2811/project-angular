import { Component, OnInit } from '@angular/core';
import {IMovieGenres} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesService} from "../../services";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: IMovieGenres;

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'] as IMovieGenres;

      if (state) {
        this.movie = state
      } else {
        this.movieService.getMovieById(id).subscribe(value => this.movie = value)
      }
    })
  }

  movieGenres():string {
    let genres: string[]=[];
    this.movie.genres.map(genre=> {
      genres.push(genre.name)
    })
    return genres.join(', ')
  }

}
