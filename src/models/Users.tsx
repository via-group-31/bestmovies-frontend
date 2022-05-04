export default class Users{
    private userID?: number;
    private username?: string;
    private email?: string;
    private accessToken: string;

    constructor(accessToken: string){
        this.accessToken = accessToken;
    }

    /* GETTERS */
    public getUserID(): number | undefined{
        return this.userID;
    }

    public getUsername(): string | undefined{
        return this.username;
    }

    public getEmail(): string | undefined{
        return this.email;
    }

    public getAccessToken(): string{
        return this.accessToken;
    }
}