export default class Users{
    private _userID?: number;
    private _username?: string;
    private _email?: string;
    private _accessToken: string;

    constructor(accessToken: string){
        this._accessToken = accessToken;
    }

    /* GETTERS */
    public get UserID(): number | undefined{
        return this._userID;
    }

    public get username(): string | undefined{
        return this._username;
    }

    public get email(): string | undefined{
        return this._email;
    }

    public get accessToken(): string{
        return this._accessToken;
    }
}