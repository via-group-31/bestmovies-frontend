import { Container, Heading, Text, Flex,  Grid, GridItem, list, Box,} from "@chakra-ui/react";
import Card from '../components/Card.component'
import UserService from "../services/User.service";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import Movie from "../models/Movie.model";

function FavoritePage() {
    const [favoriteMovie, setFavoriteMovie] = useState<Movie[] | null>(JSON.parse(localStorage.getItem('favoriteMovie')!));

    const userService: UserService = new UserService();
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);

    const navigate = useNavigate();
    
    if(favoriteMovie === null && cookie.token){
        removeCookie("token");
        navigate("/login");
    }

    const onDelete = (movie: Movie) => {

        userService.deleteFromFavorites(cookie.token, movie.movieId);
        
        (favoriteMovie!.filter((e, i) => {
            
            if(e === movie){
            favoriteMovie!.splice(i, 1);
            console.log(e);
            }
        }));
        
        localStorage.setItem('favoriteMovie', JSON.stringify(favoriteMovie));
        setFavoriteMovie(JSON.parse(localStorage.getItem('favoriteMovie')!));
    };


    return favoriteMovie === null ? <Box /> : ( 
           <Container maxW='container.lg'>
               <Heading fontSize='6xl' mb="2"> Favorite movies</Heading>
               
               <Flex fontSize="2xl" mb="4">
                   <Text flex="flex" mr="4"> 
                        {favoriteMovie!.length}
                    </Text>
                   <Text>titles</Text>
               </Flex>

               <Grid templateColumns='repeat(3, 1fr)' gap="8">

                

               {favoriteMovie!.map((n, i) => {
                return <GridItem key={i} >
                        <Card title={n.movieName}
                                image={n.moviePoster}
                                year={n.year}
                                id={n.movieId}
                                onDelete ={() => onDelete(n)}

                            />
                    </GridItem>;
                })}

                   
               </Grid>
               
            </Container>
     );
}

export default FavoritePage;