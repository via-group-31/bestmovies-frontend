export default class UserModel{
    public userEmail: string;
    public accessToken: string;

    constructor(accessToken: string){
        this.accessToken = accessToken;
        this.userEmail = atob(accessToken.split(".")[1]).match(/:(\"|\[\")(.*?)\"/gm)![0].replace(/"/gm, "").replace(":", "");
    }
}