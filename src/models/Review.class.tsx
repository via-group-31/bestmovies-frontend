import Movie from "./Movie.class";

export default class Review{
    private reviewContent: string;
    private userID: number;
    private movieID: number;

    constructor(reviewContent: string, userID: number, movieID: number){
        this.reviewContent = reviewContent;
        this.userID = userID;
        this.movieID = movieID;
    }
}