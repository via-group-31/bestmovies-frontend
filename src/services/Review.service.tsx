import axios from "axios";
import { apiURL } from "../constants";
import Review from "../models/Review.model";

export default class ReviewService{
    public async getReviewsByMovieId(movieId: number): Promise<Review[]>{
        let reviewList: Review[];

        try{
            const response = await axios.get(`${apiURL}/api/review/movie/${movieId}`);
            if(response.status !== 200)
                return [];
            
                reviewList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }

        return reviewList;
    }

    public async getReviewsByUserId(userId: number): Promise<Review[]>{
        let reviewList: Review[];

        try{
            const response = await axios.get(`${apiURL}/api/review/user/${userId}`);
            if(response.status !== 200)
                return [];
            
            reviewList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }

        return reviewList;
    }

    public async addReview(token: string, review:any ): Promise<boolean>{
        try{
            const response = await axios.post(`${apiURL}/api/review`, review, { headers: { Authorization: `Bearer ${token}` }});
            if(response.status !== 200)
                return false;
            
            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }
}