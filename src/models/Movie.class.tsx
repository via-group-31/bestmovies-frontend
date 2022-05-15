import Human from "./Human.class";

export default class Movie{
    private movieID: number;
    private title: string;
    private year: number;
    private image: string;
    private actors: Human[];

    constructor(movieID: number, title: string, year: number, image: string, actors: Human[]){
        this.movieID = movieID;
        this.title = title;
        this.year = year;
        this.image = image;
        this.actors = actors;
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

    public getImage(): string{
        return this.image;
    }

    public getActors(): Human[]{
        return this.actors;
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

    public setImage(image: string): void{
        this.image = image;
    }

    public setActors(actors: Human[]): void{
        this.actors = actors;
    }

    public addActor(actor: Human): void{
        this.actors.push(actor);
    }
}