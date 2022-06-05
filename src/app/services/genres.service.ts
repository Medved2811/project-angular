import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";
import {IAllGenres} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }

  getGenres(): Observable<IAllGenres>{
    return this.httpClient.get<IAllGenres>(urls.genres)
  }
}
