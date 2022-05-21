import Movie from "./Movie.model";
import UserModel from "./UsersModel.model";

export default class Review{
    public reviewId: number | undefined;
    public userModel: UserModel | undefined;
    public movie: Movie | null | undefined;
    public reviewContent: string | undefined;

    constructor(reviewId?: number, userModel?: UserModel, movie?: Movie | null, reviewContent?: string){
        this.reviewId = reviewId;
        this.userModel = userModel;
        this.movie = movie;
        this.reviewContent = reviewContent;
    }
}