import {IMovies} from "./IMovies";

export interface IInfo{
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}
