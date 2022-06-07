import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(private moviesService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.moviesService.getAllMovies(page || 1).subscribe(value => {
        this.movies = value.results
      });
    });
  }
}




