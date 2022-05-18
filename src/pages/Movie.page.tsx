import {
  Avatar,
  Box,
  GridItem,
  Text,
  Image,
  Grid,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "../assets/StarIcon.component";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import ReactStars from 'react-stars'

function Movie() {
  const { movieId } = useParams();

  // console.log(`movie id = ${movieId}`);

  const [isFavorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(5);

  const [cookie, setCookie, remvoeCookie] = useCookies(["token"]);

  const toggleFavorite = () => [setFavorite(!isFavorite)];

  const changeRating = (newRating: number) => {
    console.log(newRating)
    setRating(newRating);
  };

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
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            rounded="md"
            height="400px"
            width="100%"
            maxH="400px"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {/* headline */}

          <Heading fontWeight="black" fontSize="5xl">
            The Northman
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
              <Text textDecoration="underline" mr="4" fontWeight="medium">
                2022
              </Text>
              <Text mr="2" color="lightgrey" fontWeight="medium">
                Directed by
              </Text>
              <Link
                to="#"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Tvoja mac
              </Link>
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
              <Text mr="1">Horror/Drama</Text>
              <Text mr="2">&#8226; 1h 40m</Text>
            </Box>
            {cookie.token !== undefined ? (
              <Box
                color="skyBlue"
                fontWeight="semibold"
                onClick={toggleFavorite}
                className={isFavorite ? "star-active" : ""}
              >
                <Link
                  to="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  color="skyBlue"
                >
                  Add to favorites
                  <StarIcon />
                </Link>
              </Box>
            ) : null}
          </Box>

          {/* Description */}
          <Box mt="8" mb="10">
            <Text fontWeight="medium" fontSize="xl">
              Prince Amleth is on the verge of becoming a man when his father is
              brutally murdered by his uncle, who kidnaps the boy’s mother. Two
              decades later, Amleth is now a Viking who’s on a mission to save
              his mother, kill his uncle and avenge his father.
            </Text>
          </Box>

          {/* actors  */}

          <Box>
            <Heading mb="6">Actors</Heading>
            <Box display="flex" gap="4">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Link
                    to="#"
                    key={i}
                    style={{ textDecoration: "underline", color: "lightgrey" }}
                  >
                    <Text fontSize="xl">Actors</Text>
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

          <Box display="flex" alignItems="center" mt="10">
            <Heading mr="4">
              Your rating
            </Heading>
           
            <ReactStars
                count={5}
                onChange={changeRating}
                size={24}
                color2={'#ffd700'} 
                value={rating}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Movie;
