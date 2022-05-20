export default class UserModel{
    private _userID: number;
    private _username: string;
    private _email: string;
    private _accessToken: string;

    constructor(userID: number, username: string, email: string, accessToken: string){
        this._userID = userID;
        this._username = username;
        this._email = email;
        this._accessToken = accessToken;
    }

    public get UserID(): number{
        return this._userID;
    }

    public get username(): string{
        return this._username;
    }

    public get email(): string{
        return this._email;
    }

    public get accessToken(): string{
        return this._accessToken;
    }

    public set userID(userID: number){
        this._userID = userID;
    }

    public set username(username: string){
        this._username = username;
    }

    public set email(email: string){
        this._email = email;
    }
}