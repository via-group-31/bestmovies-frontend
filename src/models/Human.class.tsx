export default class Human{
    private id: number;
    private name: string;
    private birth: number;

    constructor(id: number, name: string, birth: number){
        this.id = id;
        this.name = name;
        this.birth = birth;
    }

    /* GETTERS */
    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getBirth(): number{
        return this.birth;
    }

    /* SETTERS */
    public setId(id: number): void{
        this.id = id
    }

    public setName(name: string): void{
        this.name = name;
    }

    public setBirth(birth: number): void{
        this.birth = birth;
    }
}