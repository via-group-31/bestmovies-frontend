import axios from "axios";
import { apiURL } from "../constants";
import Users from "../models/Users.class";

export default class UserService{
    public async loginUser(username: string, password: string): Promise<Users | null>{
        let token: string;
        try{
            const response = await axios.post(`${apiURL}/user/login`, {
                email: username,
                password: password
            });
            if(response.status !== 200)
                return null;
            
            token = response.data.token;
        } catch(error) {
            console.error(error);
            return null;
        }
        
        //TODO: decypher token
        return new Users(0, '', '', token);
    }

    public async registerUser(username: string, password: string): Promise<boolean>{
        try{
            const response = await axios.post(`${apiURL}/register`, {
                username: username,
                password: password
            });
            console.log(response);
        } catch(error) {
            console.error(error);

            return false;
        }
        
        return true;
    }
}