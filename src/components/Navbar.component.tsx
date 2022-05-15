import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Grid, GridItem, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { black, blue, darkBlue, white } from "../constants";

type NavbarProps = {
    title: string,
    loggedIn: boolean
};

function Navbar(props: NavbarProps) {
    return ( 
        <Box bg={darkBlue} w='100%' p={4} color='white'>
            <Grid templateColumns='repeat(3, 1fr)'>
                <GridItem pl={10} pt={2}>
                    <Text color={blue} fontWeight="bold">
                        <Link to="/">{ props.title }</Link>
                    </Text>
                </GridItem>
                <GridItem>
                    <InputGroup>
                        <Input placeholder='Search' size='md' variant='outline' bg={white} color={black} />
                        <InputRightElement children={<SearchIcon color={black} />} />
                        <span>dpici</span>
                    </InputGroup>
                </GridItem>
                <GridItem pr={10} pt={2} textAlign="right">
                    { props.loggedIn ? <NavbarAvatar /> : <Text><Link to="/login">Sign in</Link></Text> }
                </GridItem>
            </Grid>
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