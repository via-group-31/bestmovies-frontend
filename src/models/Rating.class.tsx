import Movie from "./Movie.class";

export default class Rating{
    private _ratingId: number;
    private _movie: Movie;
    private _rating: number;
    private _votes: number;

    constructor(ratingId: number, movie: Movie, rating: number, votes: number){
        this._ratingId = ratingId;
        this._movie = movie;
        this._rating = rating;
        this._votes = votes
    }

    public get ratingId(): number{
        return this._ratingId;
    }

    public set ratingId(ratingId: number){
        this._ratingId = ratingId;
    }

    public get movie(): Movie{
        return this._movie
    }

    public set movie(movie: Movie){
        this._movie = movie
    }

    public get rating(): number{
        return this._rating;
    }

    public set rating(rating: number){
        this._rating = rating;
    }

    public get votes(): number{
        return this._votes;
    }

    public set votes(votes: number){
        this._votes = votes;
    }
}