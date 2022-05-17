import { Avatar, Box, SimpleGrid , GridItem, MenuList, Text, FormControl, Menu, MenuButton, MenuItem, Image, Grid } from "@chakra-ui/react";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";
import Human from "../models/Human.class";
import Movie from "../models/Movie.class";
import UserService from "../services/User.service";
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
                                       let path = `/movie/${movie.movieID}`; 
                                       navigate(path);
                                     }

                                     return (
                                        <AutoCompleteItem
                                            key={`option-${mid}`}
                                            value={movie.title}
                                            textTransform="capitalize"
                                            align="center"
                                            onClick={routeChange}
                                        >
                                            <Grid h='200px' gap={4} templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)'>
                                                <GridItem rowSpan={2} colSpan={1}>
                                                    <Image src={movie.image} h="200px" objectFit="cover" />
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    <Text fontSize="2xl">{movie.title}</Text>
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    {movie.actors.map(actor => actor.name +", ")}
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
                    { props.loggedIn ? <NavbarAvatar /> : <Text><Link to="/login">Sign in</Link></Text> }
                </GridItem>
                
            </SimpleGrid >
        </Box>
    );
}

function NavbarAvatar () {

    const [cookie, setCookie, remvoeCookie] = useCookies(['token']);
    let navigate = useNavigate(); 

    const logout = () => {
        remvoeCookie("token");
        navigate("/");
    };

    return ( 
        <Menu>
            <MenuButton as={Avatar} boxSize="30px" ></MenuButton>
            <MenuList color={black}>
                <MenuItem ><Link to="/favorites" style={{width: '100%'}}>  <Text display="flex" justifyContent="space-between">Favorites <Text bg="skyBlue" rounded="full" px="2" fontWeight="bold">8</Text></Text></Link></MenuItem>
                <MenuItem onClick={ logout }><Link to="/">Logout</Link></MenuItem>
            </MenuList>
        </Menu>
     );
}

export default Navbar;