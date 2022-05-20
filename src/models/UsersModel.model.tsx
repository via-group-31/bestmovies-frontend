export default class UserModel{
    public userId: number;
    public userEmail: string;
    public userPassword: string;
    public accessToken: string;

    constructor(userId: number, userEmail: string, userPassword: string, accessToken: string){
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.accessToken = accessToken;
    }
}