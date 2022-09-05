import React from 'react'
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Button
} from '@chakra-ui/react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'


const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
    
  const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate('/')
    })
  }
  
  return (
    <>
      <Container maxW='2x1' centerContent>
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={6} mt={12} maxW='xl'>
          <FormControl>
            <FormLabel>Inicia sesión con Google</FormLabel>
            <FormHelperText>Nunca compartiremos tu email.</FormHelperText>
          </FormControl>
          <Button mt={3} onClick={signInWithGoogle}>
            <FcGoogle maxW={5} />
            Iniciar con Google
          </Button>
        </Box>
      </Container>

    </>
  )
}

export default Login