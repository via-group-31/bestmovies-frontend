import { Container, Heading, Text, Flex,  Grid, GridItem, list,} from "@chakra-ui/react";
import Card from '../components/Card.component'
import UserService from "../services/User.service";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useParams } from "react-router-dom";
import Movie from "../models/Movie.model";

const handleDelete = () => {
    alert("Button Clicked!");
};


function FavoritePage() {
    const [favoriteMovie, setFavoriteMovie] = useState<Movie[]>([]);

    const userService: UserService = new UserService();
    const [favoriteMovieLoading, setFavoriteMovieLoading] = useState(true);
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);

    const { movieId } = useParams();

    const list: string | null  = localStorage.getItem('favoriteMovie')
    
    useEffect(() => {
        let mounted: boolean = true;
        
        if(  list !== null ){

            setFavoriteMovie(JSON.parse(list))
            setFavoriteMovieLoading(false);

        } else{
             userService.getFavorites(cookie.token).then((res) => {
            if (mounted) {

                console.log(res)
                localStorage.setItem('favoriteMovie', JSON.stringify(res))
                setFavoriteMovie(res);
                setFavoriteMovieLoading(false);
            }
            });
        }

        
        return () => {
          mounted = false;
        };

      }, [list]);


    return ( 
        <>
           <Container maxW='container.lg'>
               <Heading fontSize='6xl' mb="2"> Favorite movies</Heading>
               
               <Flex fontSize="2xl" mb="4">
                   <Text flex="flex" mr="4"> 
                        {favoriteMovie.length}
                    </Text>
                   <Text>titles</Text>
               </Flex>

               <Grid templateColumns='repeat(3, 1fr)' gap="8">

                

               {favoriteMovie.map((n, i) => {
                return <GridItem key={i} >
                        <Card title={n.movieName}
                                image={n.moviePoster}
                                year={n.year}
                                id={n.movieId}
                               

                            />
                    </GridItem>;
                })}

                   
               </Grid>
               
            </Container>
        </>
     );
}

export default FavoritePage;