import axios from "axios";
import { apiURL } from "../constants";
import Movie from "../models/Movie.model";

export default class UserService{
    public async loginUser(username: string, password: string): Promise<string | null>{
        let token: string;
        try{
            const params = new URLSearchParams();
            params.append("username", username);
            params.append("password", password);

            const response = await axios.post(`${apiURL}/api/auth/login`, params);
            if(response.status !== 200)
                return null;
            
            token = response.data.token;
        } catch(error) {
            console.error(error);
            return null;
        }
        
        return token;
    }

    public async registerUser(username: string, password: string): Promise<boolean>{
        try{
            const response = await axios.post(`${apiURL}/api/auth/register`, {
                userEmail: username,
                userPassword: password
            });
            if(response.status === 200)
                return true;
            return false;
        } catch(error) {
            console.error(error);

            return false;
        }
    }

    public async getFavorites(token: string): Promise<Movie[]>{
        let movieList: Movie[];

        try{
            const response = await axios.get(`${apiURL}/api/auth/favorites`, {headers: { Authorization: `Bearer ${token}` }});

            if(response.status !== 200)
                return [];

            movieList = response.data;
            
        } catch(error) {
            console.error(error);

            return [];
        }
        
        return movieList;
    }

    public async addToFavorites(token: string, movieId: number): Promise<boolean>{
        // TESTED API DOES NTO WORK
        try{
            const response = await axios.post(`${apiURL}/api/auth/favorites?movieId${movieId}`, { headers: { Authorization: `Bearer ${token}` }});

            if(response.status === 200)
                return true;

            return false;
            
        } catch(error) {
            console.error(error);

            return false;
        }
    }

    public async deleteFromFavorites(token: string, movieId: number): Promise<boolean>{
        // TESTED API DOES NTO WORK
        try{
            const response = await axios.delete(`${apiURL}/api/auth/favorites?movieId=${movieId}`, { headers: { Authorization: `Bearer ${token}` }});

            if(response.status === 200)
                return true;

            return false;
            
        } catch(error) {
            console.error(error);

            return false;
        }
    }

    public isLoggedIn(token: string): boolean{
        return true;
    }
}