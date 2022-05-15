import { Container, Heading, Text, Flex,  Grid, GridItem,} from "@chakra-ui/react";
import Card from '../components/Card.component'

function FavoritePage() {
    return ( 
        <>
           <Container maxW='container.xl'>
               <Heading fontSize='6xl' mb="2"> Favorite movies</Heading>
               <Flex fontSize="2xl" mb="4">
                   <Text flex="flex" mr="4"> x </Text>
                   <Text>tiles</Text>
               </Flex>

               <Grid templateColumns='repeat(3, 1fr)'>

               {Array(5)
                .fill("")
                .map((n, i) => {
                return <GridItem key={i}>
                        <Card title='title'
                            image='image'
                            year={2000}
                            type='Tv show'
                            averageRating={2}/>
                    </GridItem>;
                })}

                   
               </Grid>
               
            </Container>
        </>
     );
}

export default FavoritePage;