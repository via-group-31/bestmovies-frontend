import {Box,  Image,  Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react';
import Movie from "../models/Movie.model";
import UserService from "../services/User.service";
import { useCookies } from "react-cookie";

type CardProps = {
    image:string,
    title: string,
    year:number,
    id: number,
    onDelete: (movieId: number) => any
};

function Card(this: any,  props: CardProps){
    const userService: UserService = new UserService();
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
   
      return (
            <Box maxW='sm' borderRadius='lg' overflow='hidden' >
            <Image width="100%" height="300px" objectFit="cover" src={
               props.image === "N/A"
                  ? `${process.env.PUBLIC_URL}/assets/images.jpg`
                  : props.image
              } />
               
            <Box p='6' position="relative" bg="white">
              

                {/* Delete icon */}
                <Box position="absolute" right="4"  top="4" color="black" w="4" h="4" cursor="pointer" onClick={() => props.onDelete(props.id) }>
                    <DeleteIcon />
                </Box>
                {/* Delete icon */}

                <Box mt="-4" mr='2' height="60px">
                    <Text fontSize={props.title.length > 30 ? "md" : "xl"} color="black" fontWeight="bold" textTransform="capitalize">
                        {props.title}  
                    </Text>
                </Box>
                
        
                <Box color="black"  fontWeight="medium">
                    {props.year} 
                </Box>
        
                <Box display='flex' mt='2' alignItems='center'>
              
                
                    
                <Link to={'/movie/'+ props.id  } style={{ textDecoration: 'none', display: 'inline-block', marginLeft: 'auto' }}   >

                    <Box  ml='2' color='gray.600' fontSize='sm'  marginLeft="auto" >
                     Read more <ArrowForwardIcon/>
                    </Box>
                </Link>

                </Box>
            </Box>
            </Box>
      )
}

export default Card