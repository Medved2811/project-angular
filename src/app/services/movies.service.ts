import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IInfo} from "../interfaces";
import {IMovieGenres} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(page: number = 1): Observable<IInfo> {
    return this.httpClient.get<IInfo>(urls.movies, {params: {page}})
  }

  getMovieById(id: number): Observable<IMovieGenres> {
    return this.httpClient.get<IMovieGenres>(`${urls.movies}/${id}`)
  }
}
