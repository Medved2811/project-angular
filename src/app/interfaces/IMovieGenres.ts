import {IGenres} from "./IGenres";

export interface IMovieGenres{
  adult: boolean,
  backdrop_path: string,
  budget: number,
  genres: IGenres[],
  id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  runtime: number,
  vote_average: number,
  vote_count: number
}
