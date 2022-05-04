export default class Movie{
    private movieID: number;
    private title: string;
    private year: number;

    constructor(movieID: number, title: string, year: number){
        this.movieID = movieID;
        this.title = title;
        this.year = year;
    }

    /* GETTERS */
    public getMovieID(): number{
        return this.movieID;
    }

    public getTitle(): string{
        return this.title
    }

    public getYear(): number{
        return this.year;
    }

    /* SETTERS */
    public setMovieID(movieID: number){
        this.movieID = movieID;
    }

    public setTitle(title: string): void{
        this.title = title;
    }

    public setYear(year: number): void{
        this.year = year;
    }
}