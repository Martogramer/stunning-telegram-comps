import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from "./firebase-config";
import {
  ChakraProvider,
  Button,
  Menu,
  MenuButton,
  Container,
  MenuList,
  MenuItem,
  theme,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import './App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container p={2} pt={4} display="flex" alignItems="center" maxW='container.sm' >
          <ColorModeSwitcher mr={4} />
          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              
            </MenuButton>
            <MenuList>
                  <MenuItem><Link to="/">Inicio</Link></MenuItem>
              {!isAuth ? (
                <>
                  <MenuItem><Link to="/login">Login</Link></MenuItem>
                </>
              ) : (
                <>
                  <MenuItem><Link to="/create">Create</Link></MenuItem>
                  <MenuItem><Button onClick={signUserOut}>Cerrar Sesión</Button></MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        </Container>

        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>

    </ChakraProvider>
  );
}

export default App;
