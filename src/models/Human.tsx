import Movie from "./Movie";

export default class Human{
    private id: number;
    private name: string;
    private birth: number;
    private movies: Movie[];

    constructor(id: number, name: string, birth: number){
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.movies = [];
    }

    /* GETTERS */
    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getBirth(): number{
        return this.birth;
    }

    public getMovies(): Movie[]{
        return this.movies;
    }

    /* SETTERS */
    public setId(id: number): void{
        this.id = id
    }

    public setName(name: string): void{
        this.name = name;
    }

    public setBirth(birth: number): void{
        this.birth = birth;
    }

    public addMovieToHuman(movie: Movie): void{
        this.movies?.push(movie);
    }
}