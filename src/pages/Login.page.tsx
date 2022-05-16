import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { black, defaultPadding, white, blue, darkBlue } from "../constants";
import UserService from "../services/User.service";

function LoginPage() {

    const userService: UserService = new UserService();

    let navigate = useNavigate(); 
    const [cookie, setCookie, remvoeCookie] = useCookies(['token']);

    let toast = useToast();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [valid, setValid] = useState({ emailErr: '', passwordErr: '' });

    const [buttonLoading, setButtonLoading] = useState(false);

    const handleValidation = () => {
        let emailMsg = ''
        let passwordMsg = ''

        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        console.log(emailRef.current?.value.match(emailRegex)?.length);
        

        if (emailRef.current?.value.match(emailRegex)?.length === undefined)
            emailMsg = "Email is in invalid format"
        if (passwordRef.current?.value !== undefined && passwordRef.current.value.length < 6)
            passwordMsg = "Password must have at least 6 characters"

        setValid({
            emailErr: emailMsg,
            passwordErr: passwordMsg
        })
        return (passwordMsg === '' && emailMsg === '')
    }

    const handleLogin = () => {
        if (handleValidation() && emailRef.current?.value && passwordRef.current?.value) {
            setButtonLoading(true);
            userService.loginUser(emailRef.current.value, passwordRef.current.value).then((token) => {
                //TESTING
                setCookie("token", "token-test");
                navigate("/");
                //TESTING
                if(token == null){
                    setValid({
                        emailErr: 'Wrong username or password',
                        passwordErr: ''
                    });
                }
                else{
                    setCookie("token", token);
                    
                    toast({
                        title: 'Logged in.',
                        description: "You are now logged in.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });

                    navigate("/");
                }
                setButtonLoading(false);
            });
        }
    };
    
    return ( 
        <Container maxW="container.sm">
            <Box bg={white} width="100%" h="auto" borderRadius={10} color={black} p={defaultPadding}>
                <FormControl isRequired isInvalid={valid.emailErr.length !== 0} pb={defaultPadding/4}>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' ref={emailRef} />
                    {valid.emailErr.length !== 0  ? <FormErrorMessage>{ valid.emailErr }</FormErrorMessage> : null}
                </FormControl>

                <FormControl isRequired isInvalid={valid.passwordErr.length !== 0} pb={defaultPadding/4}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type='password' ref={passwordRef} />
                    {valid.passwordErr.length !== 0 ? <FormErrorMessage>{ valid.passwordErr }</FormErrorMessage> : null}
                </FormControl>

                <Center pt={defaultPadding}>
                    <Button bg={blue} color={white} _hover={{bg: darkBlue }}
                    isLoading={buttonLoading} loadingText="Signing in"
                    onClick={handleLogin}
                    >
                        Sign In
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