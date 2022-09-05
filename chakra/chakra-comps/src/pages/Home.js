import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import {
  Container,
} from '@chakra-ui/react';

function Home({ isAuth }) {

  const [postList, setPostList] = useState([])
  const postCollectionRef = collection(db, "posts")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc)
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts();
  // eslint-disable-next-line no-use-before-define
  }, [deletePost, postCollectionRef]);

  return (
    <>
      <Container p={2} pt={4} display="flex" alignItems="center" maxW='container.sm' >

      </Container>
    </>
  )
}

export default Home