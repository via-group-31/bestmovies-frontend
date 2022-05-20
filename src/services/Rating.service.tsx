import axios from "axios";
import { apiURL } from "../constants";
import Rating from "../models/Rating.model";

export default class RatingService{
    public async getRatingByMovieId(movieId: number): Promise<Rating[]>{
        let ratingList: Rating[];

        try{
            const response = await axios.get(`${apiURL}/api/rating/${movieId}`);
            if(response.status !== 200)
                return [];
            
                ratingList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }

        return ratingList;
    }
}