import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenres} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  storageGenreIds = new BehaviorSubject<IGenres[]>([]);
  constructor() {
  }
}
