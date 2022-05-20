import { Box, Container, Grid, GridItem, Heading, Skeleton, Text } from "@chakra-ui/react";

function MovieDetailSkeleton() {
    return (
        <Container maxW="container.xl">
          <Grid
            templateColumns="300px 1fr"
            templateRows="auto"
            gap="8"
            alignItems="start"
            position="relative"
          >
            <GridItem position="sticky" top="8">
              <Skeleton>
                <Box
                  height="400px"
                  width="100%"
                  maxH="400px"
                />
              </Skeleton>
            </GridItem>
            <GridItem>
              {/* headline */}
    
              <Heading fontWeight="black" fontSize="5xl">
                <Skeleton>Movie Name</Skeleton>
              </Heading>
    
              {/* year, directors */}
    
              <Box
                display="flex"
                justifyContent="space-between"
                mt="4"
                fontSize="xl"
                alignItems="center"
              >
                <Box display="flex">
                  <Skeleton>
                    <Text textDecoration="underline" width={300} fontWeight="medium">
                    Tags
                  </Text>
                  </Skeleton>
                </Box>
              </Box>
    
              {/* category, duration, add to-favorites  */}
    
              <Box
                display="flex"
                justifyContent="space-between"
                mt="4"
                fontSize="xl"
                alignItems="center"
              >
                <Box display="flex" color="lightgrey">
                </Box>
                
                  <Box
                  >
                    <Skeleton>
                      <Text width={150}>Tags</Text>
                    </Skeleton>
                  </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      )
}

export default MovieDetailSkeleton;