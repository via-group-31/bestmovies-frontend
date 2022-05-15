import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { black, blue, darkBlue, defaultPadding, white } from "../constants";
import UserService from "../services/User.service";

function RegisterPage() {

    const userService: UserService = new UserService();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordAgainRef = useRef<HTMLInputElement>(null);

    const [valid, setValid] = useState({ emailErr: '', passwordErr: '', passwordAgainErr: '' });

    const [buttonLoading, setButtonLoading] = useState(false);

    const handleValidation = () => {
        let emailMsg = '';
        let passwordMsg = '';
        let passwordAgainMsg = '';

        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(emailRef.current?.value.match(emailRegex)?.length === undefined)
            emailMsg = "Email is in invalid format";
        if(passwordRef.current?.value !== undefined && passwordRef.current.value.length < 6)
            passwordMsg = "Password must have at least 6 characters";
        if(passwordAgainRef.current?.value !== undefined && (passwordRef.current?.value !== passwordAgainRef.current?.value))
            passwordAgainMsg = "Passwords do not match";

        setValid({
            emailErr: emailMsg,
            passwordErr: passwordMsg,
            passwordAgainErr: passwordAgainMsg
        })
        return (passwordMsg === '' && emailMsg === '')
    }

    const handleRegister = () => {
        if (handleValidation() && emailRef.current?.value && passwordRef.current?.value) {
            setButtonLoading(true);
            userService.registerUser(emailRef.current.value, passwordRef.current.value).then((registered) => {
                if(registered){
                    console.log(registered);
                }
                else{
                    setValid({
                        emailErr: 'User with this email already exists!',
                        passwordErr: '',
                        passwordAgainErr: ''
                    });
                }
                setButtonLoading(false);
            });
        }
    };
    
    return ( 
        <Container maxW="container.sm">
            <Box bg={white} width="100%" h="auto" borderRadius={10} color={ black} p={ defaultPadding}>
                <FormControl isRequired isInvalid={ valid.emailErr.length != 0 } pb={ defaultPadding/4 }>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' ref={ emailRef } />
                    {valid.emailErr.length != 0  ? <FormErrorMessage>{ valid.emailErr }</FormErrorMessage> : null}
                </FormControl>

                <FormControl isRequired isInvalid={valid.passwordErr.length != 0} pb={ defaultPadding/4 }>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type='password' ref={ passwordRef } />
                    {valid.passwordErr.length != 0 ? <FormErrorMessage>{ valid.passwordErr }</FormErrorMessage> : null}
                </FormControl>

                <FormControl isRequired isInvalid={valid.passwordAgainErr.length != 0} pb={ defaultPadding/4 }>
                    <FormLabel htmlFor='password-again'>Password Again</FormLabel>
                    <Input id='password-again' type='password' ref={ passwordAgainRef } />
                    {valid.passwordAgainErr.length != 0 ? <FormErrorMessage>{ valid.passwordAgainErr }</FormErrorMessage> : null}
                </FormControl>

                <Center pt={defaultPadding}>
                    <Button bg={blue} color={white} _hover={{bg: darkBlue }}
                        isLoading={buttonLoading} loadingText="Signing Up"
                        onClick={handleRegister}
                    >
                        Sign In
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