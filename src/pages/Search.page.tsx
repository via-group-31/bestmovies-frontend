import { Box, Container, SimpleGrid, Image, Text, Center, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { defaultPadding } from "../constants";
import Movie from "../models/Movie.model";
import MovieService from "../services/Movie.service";

function SearchPage() {

    const { search } = useParams();
    
    const movieService: MovieService = new MovieService();

    const [movies, setMovies] = useState<Movie[]>([]);
    const [moviesLoading, setMoviesLoading] = useState(true);

    useEffect(() => {
        let mounted: boolean = true;
        setMoviesLoading(true);

        movieService.getMoviesByMovieName(String(search)).then(moviesSearch => {
            if(mounted){
                setMovies(moviesSearch);
                setMoviesLoading(false);
            }
        });

        return () => {mounted = false;}
    }, [search]);
    
    return ( 
        <Container maxW='md'>
            {moviesLoading ? 
             Array(8).fill('').map((val, i) => [
                <Box pb={defaultPadding} key={i}><Skeleton>
                  <Box width="100%" height="80px"></Box>
                </Skeleton></Box>
             ])
                :
            movies.map(movie => [
                <Link to={"/movie/" + movie.movieId} key={movie.movieId}>
                <SimpleGrid columns={2} spacing={0} pb={defaultPadding}>
                    <Box maxW={100}>
                        <Image 
                        src={movie?.moviePoster === "N/A"
                            ? `${process.env.PUBLIC_URL}/assets/images.jpg`
                            : movie?.moviePoster} 
                        />
                    </Box>
                    <Center>
                        <Text>{movie.movieName}</Text>
                    </Center>
                </SimpleGrid>
            </Link>
            ])}
            
        </Container> 
    );
}

export default SearchPage;