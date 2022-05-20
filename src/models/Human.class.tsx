import Movie from "./Movie.class";

export default class Human{
    private _personId: number;
    private _personName: string;
    private _personBirth: number | null;
    private _directorOf: Movie[];
    private _actorOf: Movie[];

    constructor(personId: number, personName: string, personBirth: number | null, directorOf: Movie[], actorOf: Movie[]){
        this._personId = personId;
        this._personName = personName;
        this._personBirth = personBirth;
        this._directorOf = directorOf;
        this._actorOf = actorOf;
    }

    public get personId(): number{
        return this._personId;
    }

    public get personName(): string{
        return this._personName;
    }

    public get personBirth(): number | null{
        return this._personBirth;
    }

    public get directorOf(): Movie[]{
        return this._directorOf;
    }

    public get actorOf(): Movie[]{
        return this._actorOf;
    }
    
    public set personId(personId: number){
        this._personId = personId
    }

    public set name(personName: string){
        this._personName = personName;
    }

    public set personBirth(personBirth: number | null){
        this._personBirth = personBirth;
    }

    public set directorOf(directorOf: Movie[]){
        this._directorOf = directorOf;
    }

    public set actorOf(actorOf: Movie[]){
        this._actorOf = actorOf;
    }
}