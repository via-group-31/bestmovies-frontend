import { Avatar, Box, GridItem,  Text,    Image, Grid, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import StarIcon from '../assets/StarIcon.component'
import React, { useState } from 'react';
import { useCookies } from "react-cookie";

function Movie(){ 
    const [isFavorite, setFavorite] = useState(false);

    const [cookie, setCookie, remvoeCookie] = useCookies(['token']);

    const toggleFavorite = () =>[
        setFavorite(!isFavorite)
    ]

    return(
        <>
        <Container  maxW='container.xl' >
            <Grid templateColumns='repeat(5, 1fr)' gap="8"> 
                <GridItem colSpan={1} width="100%">
                      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded="md" height="400px" width="100%" maxH="400px" objectFit="cover"/>
                </GridItem>
                <GridItem colStart={2} colEnd={6} h='10' >
                    {/* headline */}

                    <Heading fontWeight="black" fontSize="5xl"> 
                        The Northman
                    </Heading>

                    {/* year, directors */}

                    <Box display="flex" justifyContent="space-between" mt="4" fontSize="xl" alignItems="center">
                        <Box display="flex">
                            <Text textDecoration="underline" mr="4" fontWeight="medium">
                                2022
                            </Text>
                            <Text mr="2" color="lightgrey" fontWeight="medium">
                                Directed by 
                            </Text>
                            <Link to="#" style={{textDecoration: 'underline', fontWeight:"bold"}}>
                                Tvoja mac
                            </Link>
                        </Box>
                    </Box>

                    {/* category, duration, add to-favorites  */}

                    <Box  display="flex" justifyContent="space-between" mt="4" fontSize="xl" alignItems="center">
                        <Box display="flex" color="lightgrey">
                                <Text mr="1">
                                    Horror/Drama
                                </Text>
                                <Text mr="2" >
                                &#8226; 1h 40m
                                </Text>
                               
                            </Box>
                            { cookie.token !== undefined ? <Box color="skyBlue" fontWeight="semibold" onClick={toggleFavorite} className={isFavorite ? 'star-active' : ''}>
                            <Link to="#" style={{display:'flex', alignItems: 'center', gap:'0.5rem'}}  color="skyBlue" >

                                Add to favorites
                                <StarIcon />
                            </Link>  
                          
                        </Box> : null }
                    </Box>

                    {/* Description */}
                    <Box mt="8" mb="10">
                        <Text fontWeight="medium" fontSize="xl" >
                        Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy’s mother. Two decades later, Amleth is now a Viking who’s on a mission to save his mother, kill his uncle and avenge his father.
                        </Text>
                    </Box>

                    {/* actors  */}

                    <Box>
                        <Heading mb="6">
                            Actors
                        </Heading>
                        <Box display="flex" gap="4">
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <Link to="#" key={i}  style={{textDecoration: 'underline', color:"lightgrey"}}> 
                                        <Text fontSize="xl">
                                            Actors
                                        </Text>
                                    </Link>
                              
                            ))}
                        </Box>
                    </Box>

                    {/* Reviews */}
                    <Box display="flex" alignItems="baseline" mt="10">
                        <Heading mb="6" mr="4">
                                Reviews
                        </Heading>
                        <Text fontWeight="light" color="lightgrey">
                            (57 reviews)
                        </Text>
                    </Box>

                </GridItem>
            </Grid>
        </Container>
       
        </>
    )
}

export default Movie
