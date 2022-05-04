import axios from "axios";
import Users from "../models/Users.class";

export default class UserService{
    public async loginUser(username: string, password: string): Promise<Users>{
        try{
            const response = await axios.get(`${process.env.BACKEND_URL}/login`);
            console.log(response);
        } catch(error) {
            console.error(error);
        }
        

        return new Users("");
    }
}