import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/bolt.svg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
        Made with
            <img src={Logo} alt="logo" style={{ width: '30px', height: '30px', margin: '0px 3px -10px 5px' }} />
        by 
        {' '}
        <Link to="/">
        Telescopiens
        </Link>
        </Typography>
    </Stack>
  </Box>
);

export default Footer;