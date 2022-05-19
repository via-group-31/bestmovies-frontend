import axios from "axios";
import { apiURL } from "../constants";
import Movie from "../models/Movie.class";

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
}