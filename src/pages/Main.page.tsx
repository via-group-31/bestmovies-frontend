import { Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Movie from "../models/Movie.class";
import MovieService from "../services/Movie.service";

function MainPage() {
    const movieService: MovieService = new MovieService();

    // const [movieList, setMovieList] = useState<Movie[]>([]);
    // const [moviesLoading, setMoviesLoading] = useState(true);

    // useEffect(() => {
    //     movieService.getMovies().then(movies => {
    //         setMovieList(movies);
    //         setMoviesLoading(false);
    //     });
    // }, [])
    

    return ( 
        <Container maxW='container.xl'>
            {/* {moviesLoading ? null : <Text>{movieList[0].title}</Text>} */}
        </Container>
    );
}

export default MainPage;