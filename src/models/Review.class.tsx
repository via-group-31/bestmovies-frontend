import Movie from "./Movie.class";

export default class Review{
    private _reviewContent: string;
    private _userID: number;
    private _movieID: number;

    constructor(reviewContent: string, userID: number, movieID: number){
        this._reviewContent = reviewContent;
        this._userID = userID;
        this._movieID = movieID;
    }

    public get reviewContent(): string{
        return this._reviewContent;
    }

    public get userID(): number{
        return this._userID;
    }

    public get movieID(): number{
        return this._movieID;
    }

    public set reviewContent(reviewContent: string){
        this._reviewContent = reviewContent;
    }

    public set userID(userID: number){
        this._userID = userID;
    }

    public set movieID(movieID: number){
        this._movieID = movieID;
    }
}