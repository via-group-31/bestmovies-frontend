import Human from "./Human.class";

export default class Movie{
    private _movieId: number;
    private _movieName: string;
    private _year: number;
    private _directors: Human[];
    private _stars: Human[];

    constructor(movieId: number, movieName: string, year: number, directors: Human[], stars: Human[]){
        this._movieId = movieId;
        this._movieName = movieName;
        this._year = year;
        this._directors = directors;
        this._stars = stars;
    }

    public get movieId(): number{
        return this._movieId;
    }

    public get movieName(): string{
        return this._movieName;
    }

    public get year(): number{
        return this._year;
    }

    public get stars(): Human[]{
        return this._stars;
    }

    public get directors(): Human[]{
        return this.directors;
    }

    public set movieId(movieId: number){
        this.movieId = movieId;
    }

    public set movieName(movieName: string){
        this.movieName = movieName;
    }

    public set year(year: number){
        this._year = year;
    }

    public set stars(stars: Human[]){
        this._stars = stars;
    }

    public set directors(directors: Human[]){
        this._directors = directors;
    }
}