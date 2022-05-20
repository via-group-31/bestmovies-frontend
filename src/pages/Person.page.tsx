import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Grid, GridItem, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingDetail from "../components/LoadingDetail.component";
import Person from "../models/Person.model";
import PersonService from "../services/Person.service";

function PersonPage() {

    const { personId } = useParams();

    const [person, setPerson] = useState<Person | null>(null);
    const [personLoading, setPersonLoading] = useState(true);

    const personService: PersonService = new PersonService();

    useEffect(() => {
        personService.getPersonByPersonId(Number(personId)).then(person => {
            if (person !== null) {
                setPerson(person);
                setPersonLoading(false);
                console.log(person);

            }
        });
    }, []);

    return (personLoading ? <LoadingDetail /> :
        <Container maxW='container.xl' >
            <Grid templateColumns='repeat(5, 1fr)' gap="8">
                <GridItem colSpan={1} width="100%">
                    <Image src='https://cryptorenaissance.org/img/gigachad.ab28dd28.png' alt='Dan Abramov' rounded="md" height="auto" width="100%" objectFit="cover" />
                </GridItem>
                <GridItem colStart={2} colEnd={6} h='10' >
                    {/* headline */}

                    <Heading fontWeight="black" fontSize="5xl">
                        {person?.personName}  (Born *{person?.personBirth})
                    </Heading>

                    {/* category, duration, add to-favorites  */}

                    <Box display="flex" justifyContent="space-between" mt="4" fontSize="xl" alignItems="center">
                        <Box display="flex" color="lightgrey">
                            <Text mr="1">
                                {person!.actorOf.length > 0 ? "Actor " : null}
                                {person!.directorOf.length > 0 ? " Director" : null}
                            </Text>

                        </Box>
                    </Box>

                    {person!.directorOf.length > 0 ?
                        <Box>
                            <Heading mt={6} mb="6">
                                Filmography - Director
                            </Heading>
                            <Box display="flex" gap="4">
                                <SimpleGrid columns={3} spacing={4}>
                                    {person?.directorOf.map(movie => (
                                        <Box><Link to={`/movie/${movie.movieId}`} style={{ textDecoration: 'underline', color: "lightgrey" }}>
                                            <Text fontSize="xl">
                                                {movie.movieName}
                                            </Text>
                                        </Link></Box>

                                    ))}
                                </SimpleGrid>
                            </Box> </Box> : <Box />}

                    {person!.actorOf.length > 0 ?
                        <Box>
                            <Heading mt={6} mb="6">
                                Filmography - Actor
                            </Heading>
                            <Box display="flex" gap="4">
                                <SimpleGrid columns={3} spacing={4}>
                                    {person?.actorOf.map(movie => (
                                        <Box><Link to={`/movie/${movie.movieId}`} style={{ textDecoration: 'underline', color: "lightgrey" }}>
                                            <Text fontSize="xl">
                                                {movie.movieName}
                                            </Text>
                                        </Link></Box>

                                    ))}
                                </SimpleGrid>
                            </Box> </Box> : <Box />}


                </GridItem>
            </Grid>
        </Container>
    );
}

export default PersonPage;