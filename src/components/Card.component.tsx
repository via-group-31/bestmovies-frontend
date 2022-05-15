import {Box, Badge, Image, Link, Text } from "@chakra-ui/react";
import StarIcon from '../assets/StarIcon.component'
import { ArrowForwardIcon } from '@chakra-ui/icons'

type CardProps = {
    image:string,
    title: string,
    type:string,
    year:number,
    averageRating: number
};

function Card(props: CardProps){
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
    
      return (
            <Box maxW='sm' borderRadius='lg' overflow='hidden' mb="8">
            <Image src={property.imageUrl} alt={property.imageAlt} />
               

        
            <Box p='6' position="relative" bg="white">
            <Box position="absolute" right="0" bg="darkBlue" py="2" px="4" style={{bottom: '9.55rem'}}>
                    <Text>
                       {props.type}
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="2xl" color="black" fontWeight="bold">
                    {props.title}  
                    </Text>
                </Box>
              
        
                <Box color="black">
                    {props.year} 
                </Box>
        
                <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                    <StarIcon
                        key={i}

                    />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {props.averageRating} 
                </Box>
                    
                <Link as="div" style={{ textDecoration: 'none', display: 'inline-block' }}  marginLeft="auto">

                    <Box  ml='2' color='gray.600' fontSize='sm'  marginLeft="auto">
                    Read more <ArrowForwardIcon/>
                    </Box>
                </Link>

                </Box>
            </Box>
            </Box>
      )
}

export default Card