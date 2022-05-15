import axios from "axios";
import { apiURL } from "../constants";
import Users from "../models/Users.class";

export default class UserService{
    public async loginUser(username: string, password: string): Promise<Users>{
        try{
            const response = await axios.get(`${apiURL}/login`);
            console.log(response);
        } catch(error) {
            console.error(error);
        }
        
        return new Users("");
    }
}