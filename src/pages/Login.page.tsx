import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { black, defaultPadding, white, blue, darkBlue } from "../constants";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

    //TODO: Add email check and required fields
    return ( 
        <Container maxW="container.sm">
            <Box bg={white} width="100%" h="auto" borderRadius={10} color={black} p={defaultPadding}>
                <FormControl isRequired isInvalid={emailError} pb={defaultPadding/4}>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' onChange={(value) => setEmail(value.target.value)} />
                    {emailError ? <FormErrorMessage>{ emailErrorMsg }</FormErrorMessage> : null}
                </FormControl>

                <FormControl isRequired isInvalid={passwordError} pb={defaultPadding/4}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type='password' onChange={(value) => setPassword(value.target.value)} />
                    {passwordError ? <FormErrorMessage>{ passwordErrorMsg }</FormErrorMessage> : null}
                </FormControl>

                <Center pt={defaultPadding}>
                    <Button bg={blue} color={white} _hover={{bg: darkBlue }}
                    onClick={() => {
                        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        if(email.match(emailRegex)?.length == undefined){
                            setEmailError(true);
                            setEmailErrorMsg('Email is in invalid format');
                        }
                        else{
                            setEmailError(false);
                        }
                        
                        if(email.length <= 0){
                            setEmailError(true);
                            setEmailErrorMsg('Email field is required')
                        }
                        else{
                            setEmailError(false);
                        }

                        if(password.length < 6){
                            setPasswordError(true);
                            setPasswordErrorMsg('Password must have at least 6 characters')
                        }
                        else{
                            setPasswordError(false);
                        }

                        if(!emailError && !passwordError){
                            console.log("Everything is good");
                        }
                    }}
                    >
                        Sign Up
                    </Button>
                </Center>

                <Center pt={defaultPadding/2}>
                    <Text>Don't have account yet? <Link to="/register">Click here to register.</Link></Text>
                </Center>
            </Box>
        </Container>
     );
}

export default LoginPage;