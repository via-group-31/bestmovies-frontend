export default class Human{
    private _id: number;
    private _name: string;
    private _birth: number;

    constructor(id: number, name: string, birth: number){
        this._id = id;
        this._name = name;
        this._birth = birth;
    }

    public get id(): number{
        return this._id;
    }

    public get name(): string{
        return this._name;
    }

    public get birth(): number{
        return this._birth;
    }
    
    public set id(id: number){
        this._id = id
    }

    public set name(name: string){
        this._name = name;
    }

    public set birth(birth: number){
        this._birth = birth;
    }
}