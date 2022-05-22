import { Avatar, Box, SimpleGrid , GridItem, MenuList, Text, Menu, MenuButton, MenuItem, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";

type NavbarProps = {
    title: string,
    loggedIn: boolean
};

function Navbar(props: NavbarProps) {

    const [search, setSearch] = useState("");
    let navigate = useNavigate(); 

    return ( 
        <Box bg={darkBlue} w='100%' p={4} color='white'>
            <SimpleGrid columns={3}  alignItems="center">
                <GridItem pl={defaultPadding/3} pt={2}>
                    <Text color={blue} fontWeight="bold">
                        <Link to="/">{ props.title }</Link>
                    </Text>
                </GridItem>
                <GridItem maxW="790px" margin="0 auto" w="100%">
                    <Input
                        placeholder="Search" 
                        _placeholder={{ color: 'grey' }} 
                        bg={white} 
                        color={black} 
                        onKeyDown={(e: any) => e.keyCode === 13 ? navigate(`/search/${search}`) : null}
                        onChange={ (value: any) => setSearch(value.target.value) }
                     />
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
    let favoriteMoviesLenght = localStorage.getItem('favoriteMovie')

    return ( 
        <Menu>
            <MenuButton as={Avatar} boxSize="30px" ></MenuButton>
            <MenuList color={black}>
                <MenuItem >
                    <Link to="/favorites" style={{width: '100%'}}>  
                        <Text display="flex" justifyContent="space-between">Favorites 
                            {favoriteMoviesLenght !== null ?  
                                <Text bg="skyBlue" rounded="full" px="2" fontWeight="bold">{JSON.parse(favoriteMoviesLenght).length} </Text> 
                                : ''}
                           
                                
                            
                        
                        </Text>
                    </Link>
                </MenuItem>
                <MenuItem onClick={ () => {
                    removeCookie("token");
                    navigate("/");
                } }><Link to="/">Logout</Link></MenuItem>
            </MenuList>
        </Menu>
     );
}

export default Navbar;