import { Container, Text, Heading, Box, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Movie from "../models/Movie.class";
import MovieService from "../services/Movie.service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MainPage() {
    const movieService: MovieService = new MovieService();

    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [moviesLoading, setMoviesLoading] = useState(true);

    useEffect(() => {
        movieService.getMovies().then(movies => {
            setMovieList(movies);
            setMoviesLoading(false);
        });
    }, [])
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return ( 
        <Container maxW='container.xl' >
            <Heading fontSize="6xl" fontWeight="black" mb="20" textAlign="center"> 
                Featured movies
            </Heading>

            <Slider {...settings} >
            {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <Link key={i} style={{textDecoration: "none"}} className={'featured-link'} > 
                        <Box position="relative" rounded="md" >
                              <Image src="http://placekitten.com/g/400/400" />
                              <Box className={'featured-box'} px="4">
                              <Text mt="8">
                                  Macka: The film 
                              </Text>

                              <Text mt="4" fontSize="2xl" fontWeight="bold">
                                  by Tvoja mac
                              </Text>

                              <Text mt="4" fontSize="2xl" fontWeight="medium">
                                  Comedy
                              </Text>
                              <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Text fontSize="2xl" color="grey" fontWeight="medium"> 
                                  2022
                                </Text>
                                <Text fontSize="xl" color="grey" fontWeight="medium"> 
                                  1h 40m
                                </Text>
                              
                              </Box>
                            
                              </Box>
                          </Box>
                      </Link>
                    ))}
               
              
         
            </Slider>
            {/* {moviesLoading ? null : <Text>{movieList[0].title}</Text>} */}
        </Container>
    );
}

export default MainPage;