import React, {useState, useEffect} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db, auth} from '../firebase-config.js'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  SkeletonCircle,
SkeletonText,
  Button,
  Container,
  VStack,
  Grid,
  Input,
  Textarea,
} from '@chakra-ui/react';

function CreatePost({isAuth}) {
  const [title, setTitle]= useState("")
  const [postText, setPostText]= useState("")

  let navigate=useNavigate();
  const postCollectionRef = collection(db, "posts")

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  }
  useEffect(() => {
    if(!isAuth){
      navigate("/login")
    }
  }, [isAuth, navigate]);

  return (
    <>
    <Container maxW={600}>
    <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' />
</Box>
    <Box minW={{ base: "90%", md: "468px" }} borderWidth='1px'>
        <Grid minH="20vh" p={10}>
          <VStack spacing={8} 
              p="1rem"
              borderWidth='1px'
              boxShadow="md">
          
          <Input placeholder='Titulo' onChange={(event)=>{
            setTitle(event.target.value)
          }}/>
          <Textarea placeholder='Texto' onChange={(event)=>{
            setPostText(event.target.value)
          }}/>
          <Button onClick={createPost}>Publicar</Button>
          
          </VStack>
        </Grid>
      </Box>
    </Container>
    </>
  )
}

export default CreatePost