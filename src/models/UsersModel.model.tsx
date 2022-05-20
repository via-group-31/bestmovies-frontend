export default class UserModel{
    private userID: number;
    private username: string;
    private email: string;
    private accessToken: string;

    constructor(userID: number, username: string, email: string, accessToken: string){
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.accessToken = accessToken;
    }
}