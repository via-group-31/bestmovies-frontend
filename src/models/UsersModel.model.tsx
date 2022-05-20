export default class UserModel{
    public userID: number;
    public username: string;
    public email: string;
    public accessToken: string;

    constructor(userID: number, username: string, email: string, accessToken: string){
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.accessToken = accessToken;
    }
}