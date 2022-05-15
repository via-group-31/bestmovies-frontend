import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";

function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordAgainError, setPasswordAgainError] = useState(false);

    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    const [passwordAgainErrorMsg, setPasswordAgainErrorMsg] = useState('');

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

                <FormControl isRequired isInvalid={passwordAgainError} pb={defaultPadding/4}>
                    <FormLabel htmlFor='password-again'>Password Again</FormLabel>
                    <Input id='password-again' type='password'onChange={(value) => setPasswordAgain(value.target.value)}  />
                    {passwordAgainError ? <FormErrorMessage>{ passwordAgainErrorMsg }</FormErrorMessage> : null}
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

                        if(passwordAgain !== password){
                            setPasswordAgainError(true);
                            setPasswordError(true);
                            setPasswordAgainErrorMsg('Passwords do not match');
                            setPasswordErrorMsg('Passwords do not match')
                        }
                        else{
                            setPasswordAgainError(false);
                            setPasswordError(false);
                        }

                        if(password.length < 6){
                            setPasswordError(true);
                            setPasswordErrorMsg('Password must have at least 6 characters')
                        }
                        else{
                            setPasswordError(false);
                        }

                        if(passwordAgain.length < 6){
                            setPasswordAgainError(true);
                            setPasswordAgainErrorMsg('Password must have at least 6 characters')
                        }
                        else{
                            setPasswordError(false);
                        }

                        if(!emailError && !passwordError && !passwordAgainError){
                            console.log("Everything is good");
                        }
                    }}
                    >
                        Sign Up
                    </Button>
                </Center>

                <Center pt={defaultPadding/2}>
                    <Text>Already have account? <Link to="/login">Click here to login.</Link></Text>
                </Center>
            </Box>
        </Container>
     );
}

export default RegisterPage;