import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input()
  movie: IMovies;

  constructor() {
  }

  ngOnInit(): void {
  }

}
