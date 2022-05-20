import axios from "axios";
import { apiURL } from "../constants";
import Movie from "../models/Movie.model";

export default class MovieService{
    public async getMovies(): Promise<Movie[]>{
        let movieList: Movie[];
        try{
            const response = await axios.get(`${apiURL}/api/movies`);
            if(response.status !== 200)
                return [];
            
            movieList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }
        
        return movieList;
    }

    public async getMoviesByMovieName(movieName: string): Promise<Movie[]>{
        let movieList: Movie[];
        try{
            const response = await axios.get(`${apiURL}/api/movies/${movieName}`);
            if(response.status !== 200)
                return [];
            
            movieList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }
        
        return movieList;
    }

    public async getMoviesByMovieId(movieId: number): Promise<Movie | null>{
        let movie: Movie;
        try{
            const response = await axios.get(`${apiURL}/api/movie?movieId=${movieId}`);
            if(response.status !== 200)
                return null;
            
                movie = response.data;
        } catch(error) {
            console.error(error);
            return null;
        }
        
        return movie;
    }
}