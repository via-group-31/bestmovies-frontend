import Movie from "./Movie.model";

export default class Human{
    public personId: number;
    public personName: string;
    public personBirth: number | null;
    public directorOf: Movie[];
    public actorOf: Movie[];

    constructor(personId: number, personName: string, personBirth: number | null, directorOf: Movie[], actorOf: Movie[]){
        this.personId = personId;
        this.personName = personName;
        this.personBirth = personBirth;
        this.directorOf = directorOf;
        this.actorOf = actorOf;
    }
}