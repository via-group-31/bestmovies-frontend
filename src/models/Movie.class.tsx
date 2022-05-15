import Human from "./Human.class";

export default class Movie{
    private _movieID: number;
    private _title: string;
    private _year: number;
    private _image: string;
    private _actors: Human[];

    constructor(movieID: number, title: string, year: number, image: string, actors: Human[]){
        this._movieID = movieID;
        this._title = title;
        this._year = year;
        this._image = image;
        this._actors = actors;
    }

    public get movieID(): number{
        return this._movieID;
    }

    public get title(): string{
        return this._title;
    }

    public get year(): number{
        return this._year;
    }

    public get image(): string{
        return this._image;
    }

    public get actors(): Human[]{
        return this._actors;
    }

    /* SETTERS */
    public set movieID(movieID: number){
        this._movieID = movieID;
    }

    public set title(title: string){
        this._title = title;
    }

    public set year(year: number){
        this._year = year;
    }

    public set image(image: string){
        this._image = image;
    }

    public set actors(actors: Human[]){
        this._actors = actors;
    }

    // public addActor(actor: Human): void{
    //     this.actors.push(actor);
    // }
}