import axios from "axios";
import { apiURL } from "../constants";
import Human from "../models/Person.model";

export default class PersonService{
    public async getPersonByName(personName: string): Promise<Human[]>{
        let personList: Human[];

        try{
            const response = await axios.get(`${apiURL}/api/person/${personName}`);
            if(response.status !== 200)
                return [];
            
                personList = response.data;
        } catch(error) {
            console.error(error);
            return [];
        }

        return personList;
    }

    public async getPersonByPersonId(personId: number): Promise<Human | null>{
        let person: Human;

        try{
            const response = await axios.get(`${apiURL}/api/person?personId=${personId}`);
            if(response.status !== 200)
                return null;
            
                person = response.data;
        } catch(error) {
            console.error(error);
            return null;
        }

        return person;
    }
}