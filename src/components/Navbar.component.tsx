import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, SimpleGrid , GridItem, MenuList, Text, FormControl, Menu, MenuButton, MenuItem, Image, Grid, Center } from "@chakra-ui/react";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";
import { Link, useNavigate } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";
import Human from "../models/Human.class";
import Movie from "../models/Movie.class";
import StarIcon from "../assets/StarIcon.component"
type NavbarProps = {
    title: string,
    loggedIn: boolean
};

function Navbar(props: NavbarProps) {

    let navigate = useNavigate(); 

    const actors: Human[] = [];
    actors.push(new Human(1, "John Doe", 20));
    actors.push(new Human(2, "Jane Doe", 21));
    actors.push(new Human(3, "Bob Bobber", 22));

    const movies: Movie[] = [];
    movies.push(new Movie(1, "Pulp fiction", 1994, "https://i-viaplay-com.akamaized.net/viaplay-prod/771/672/1473257890-66ec43721fe0fd0073af100473a09da74924816c.jpg?width=400&height=600", actors));
    movies.push(new Movie(2, "Avatar 2", 2023, "https://www.kino.dk/sites/default/files/styles/k_poster_big/public/movie-posters/avatar2plakat.jpg?itok=A_IsQnnZ", actors));
    movies.push(new Movie(3, "Doctor Strange 2", 2022, "https://preview.redd.it/idmatrlv8af81.jpg?auto=webp&s=ce52969c3a401eb4b8806b1b8cefb8f67b3b9080", actors));

    return ( 
        <Box bg={darkBlue} w='100%' p={4} color='white'>
            <SimpleGrid columns={3} alignItems="center">
                <GridItem pl={defaultPadding/3} pt={2}>
                    <Text color={blue} fontWeight="bold">
                        <Link to="/">{ props.title }</Link>
                    </Text>
                </GridItem>
                <GridItem>
                    <FormControl id="movie" w="100%" color={black}>
                        <AutoComplete>
                            <AutoCompleteInput placeholder="Search" bgColor={white} />
                            <AutoCompleteList>
                                 {movies.map((movie, mid) => {
                                     const routeChange = () =>{ 
                                       let path = `/movie/${movie.getMovieID()}`; 
                                       navigate(path);
                                     }

                                     return (
                                        <AutoCompleteItem
                                            key={`option-${mid}`}
                                            value={movie.getTitle()}
                                            textTransform="capitalize"
                                            align="center"
                                            onClick={routeChange}
                                        >
                                            <Grid h='200px' gap={4} templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)'>
                                                <GridItem rowSpan={2} colSpan={1}>
                                                    <Image src={movie.getImage()} h="200px" objectFit="cover" />
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    <Text fontSize="2xl">{movie.getTitle()}</Text>
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    {movie.getActors().map(actor => actor.getName() +", ")}
                                                </GridItem>
                                            </Grid>
                                        </AutoCompleteItem>
                                    );
                                 })}
                            </AutoCompleteList>
                        </AutoComplete>
                    </FormControl>
                </GridItem>
                <GridItem pr={defaultPadding/2} pt={2} textAlign="right"  alignItems="center" >
                    
                    <Box display="flex" ml="auto" justifyContent="end" gap="8" alignItems="center">
                        <Box display="flex" alignItems="center"> 
                             Your favorites 
                             <StarIcon/>
                        </Box>
                   
                    { props.loggedIn ? <NavbarAvatar /> : <Text><Link to="/login">Sign in</Link></Text> }
                    </Box>
                </GridItem>
                
            </SimpleGrid >
        </Box>
    );
}

function NavbarAvatar () {
    return ( 
        <Menu>
            <MenuButton as={Avatar} boxSize="30px" ></MenuButton>
            <MenuList color={black}>
                <MenuItem><Link to="/favorites">Favorites</Link></MenuItem>
                <MenuItem onClick={ () => console.log("logout")}><Link to="/">Logout</Link></MenuItem>
            </MenuList>
        </Menu>
     );
}

export default Navbar;