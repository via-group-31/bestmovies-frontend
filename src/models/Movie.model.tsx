import Human from "./Person.model";

export default class Movie{
    public movieId: number;
    public movieName: string;
    public year: number;
    public directors: Human[];
    public stars: Human[];
    public moviePoster: string;

    constructor(movieId: number, movieName: string, year: number, directors: Human[], stars: Human[], moviePoster: string){
        this.movieId = movieId;
        this.movieName = movieName;
        this.year = year;
        this.directors = directors;
        this.stars = stars;
        this.moviePoster = moviePoster;
    }
}