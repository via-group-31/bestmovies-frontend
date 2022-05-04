import Movie from "./Movie";

export default class Review{
    private reviewContent: string;
    private userID: number;
    private movieID: Movie;

    constructor(reviewContent: string, userID: number, movieID: Movie){
        this.reviewContent = reviewContent;
        this.userID = userID;
        this.movieID = movieID;
    }
}