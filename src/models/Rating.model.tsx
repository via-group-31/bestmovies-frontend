import Movie from "./Movie.model";

export default class Rating{
    public ratingId: number;
    public movie: Movie;
    public rating: number;
    public votes: number;

    constructor(ratingId: number, movie: Movie, rating: number, votes: number){
        this.ratingId = ratingId;
        this.movie = movie;
        this.rating = rating;
        this.votes = votes
    }
}