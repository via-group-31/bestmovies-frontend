import Human from "./Person.model";

export default class Movie{
    public movieId: number;
    public movieName: string;
    public year: number;
    public directors: Human[];
    public stars: Human[];

    constructor(movieId: number, movieName: string, year: number, directors: Human[], stars: Human[]){
        this.movieId = movieId;
        this.movieName = movieName;
        this.year = year;
        this.directors = directors;
        this.stars = stars;
    }
}