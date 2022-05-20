import { Avatar, Box, SimpleGrid , GridItem, MenuList, Text, FormControl, Menu, MenuButton, MenuItem, Image, Grid } from "@chakra-ui/react";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";
import Human from "../models/Person.model";
import Movie from "../models/Movie.model";
import UserService from "../services/User.service";
type NavbarProps = {
    title: string,
    loggedIn: boolean
};

function Navbar(props: NavbarProps) {

    let navigate = useNavigate(); 

    const actors: Human[] = [];
    actors.push(new Human(1, "John Doe", 20, [], []));
    actors.push(new Human(2, "Jane Doe", 21, [], []));
    actors.push(new Human(3, "Bob Bobber", 22, [], []));

    const movies: Movie[] = [];
    movies.push(new Movie(1, "Pulp fiction", 1994, actors, actors, ""));
    movies.push(new Movie(2, "Avatar 2", 2023, actors, actors, ""));
    movies.push(new Movie(3, "Doctor Strange 2", 2022, actors, actors, ""));

    return ( 
        <Box bg={darkBlue} w='100%' p={4} color='white'>
            <SimpleGrid columns={3}  alignItems="center">
                <GridItem pl={defaultPadding/3} pt={2}>
                    <Text color={blue} fontWeight="bold">
                        <Link to="/">{ props.title }</Link>
                    </Text>
                </GridItem>
                <GridItem maxW="790px" margin="0 auto" w="100%">
                    <FormControl id="movie" w="100%" color={black}>
                        <AutoComplete>
                            <AutoCompleteInput placeholder="Search" bgColor={white} />
                            <AutoCompleteList>
                                 {movies.map((movie, mid) => {
                                     const routeChange = () =>{ 
                                       let path = `/movie/${movie.movieId}`; 
                                       navigate(path);
                                     }

                                     return (
                                        <AutoCompleteItem
                                            key={`option-${mid}`}
                                            value={movie.movieName}
                                            textTransform="capitalize"
                                            align="center"
                                            onClick={routeChange}
                                        >
                                            <Grid h='200px' gap={4} templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                                                {/* <GridItem rowSpan={4} colSpan={1}>
                                                    <Image src={movie.image} h="200px"  objectFit="cover" />
                                                </GridItem> */}
                                                <GridItem colSpan={2}>
                                                    <Text fontSize="xl" fontWeight="semibold">{movie.movieName}</Text>
                                                </GridItem>
                                                <GridItem colSpan={2} fontSize="md" mt="-4">
                                                    {movie.year}
                                                </GridItem>
                                                <GridItem colSpan={2} mt="-10" fontSize="xl">

                                                    {movie.stars.map((star, index) => (index? ', ' : '') + star.personName )}
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

    const [cookie, setCookie, removeCookie] = useCookies(['token']);
    let navigate = useNavigate(); 

    const logout = () => {
        removeCookie("token");
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