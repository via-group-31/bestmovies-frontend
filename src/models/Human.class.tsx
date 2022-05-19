export default class Human{
    private _personId: number;
    private _personName: string;
    private _personBirth?: number;

    constructor(personId: number, personName: string, personBirth?: number){
        this._personId = personId;
        this._personName = personName;
        this._personBirth = personBirth;
    }

    public get personId(): number{
        return this._personId;
    }

    public get personName(): string{
        return this._personName;
    }

    public get personBirth(): number | undefined{
        return this._personBirth;
    }
    
    public set personId(personId: number){
        this._personId = personId
    }

    public set name(personName: string){
        this._personName = personName;
    }

    public set personBirth(personBirth: number | undefined){
        this._personBirth = personBirth;
    }
}