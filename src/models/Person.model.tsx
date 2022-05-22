import Movie from "./Movie.model";

export default class Person{
    public personId: number;
    public personName: string;
    public personBirth: number | null;
    public directorOf: Movie[];
    public actorOf: Movie[];
    public personImage?: string;

    constructor(personId: number, personName: string, personBirth: number | null, directorOf: Movie[], actorOf: Movie[], personImage? :string){
        this.personId = personId;
        this.personName = personName;
        this.personBirth = personBirth;
        this.directorOf = directorOf;
        this.actorOf = actorOf;
        this.personImage = personImage;
    }
}