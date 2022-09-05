import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Button,
    VStack,
    Menu,
    MenuButton,
    Container,
    Box,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    MenuList,
    MenuItem,
    DrawerBody,
    Input,
    useDisclosure,
    DrawerFooter
} from '@chakra-ui/react';


const NavBar = () => {
    return (
        <>
            
                <Container p={2} pt={4} display="flex" alignItems="center" maxW='container.sm' >

                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Container>
            
        </>
    )
}
export default NavBar