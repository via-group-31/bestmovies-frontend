import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function PersonPage() {

    const { personId } = useParams();

    console.log(`person id = ${ personId }`);

    return ( 
        <Container  maxW='container.xl' >
            <Grid templateColumns='repeat(5, 1fr)' gap="8"> 
                <GridItem colSpan={1} width="100%">
                      <Image src='https://cryptorenaissance.org/img/gigachad.ab28dd28.png' alt='Dan Abramov' rounded="md" height="400px" width="100%" maxH="400px" objectFit="cover"/>
                </GridItem>
                <GridItem colStart={2} colEnd={6} h='10' >
                    {/* headline */}

                    <Heading fontWeight="black" fontSize="5xl"> 
                        GigaChad - { personId }
                    </Heading>

                    {/* category, duration, add to-favorites  */}

                    <Box  display="flex" justifyContent="space-between" mt="4" fontSize="xl" alignItems="center">
                        <Box display="flex" color="lightgrey">
                                <Text mr="1">
                                    Actor, Director, God
                                </Text>
                               
                            </Box>
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
                            Filmography
                        </Heading>
                        <Box display="flex" gap="4">
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <Link to={`movie/${ i+1 }`} key={i}  style={{textDecoration: 'underline', color:"lightgrey"}}> 
                                        <Text fontSize="xl">
                                            Movie {i+1}
                                        </Text>
                                    </Link>
                              
                            ))}
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
     );
}

export default PersonPage;