import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logoAlphaSoft from './logo_alpha.png'
import "./Footer.css"

function Footer() {
  return (
    <Box backgroundColor ="#002776" sx={{ flexGrow: 1, overflow: 'hidden', px: 3}}>
          <Box item sx={{ my: 1, mx: 'auto', p: 1, mt: "2em" }}>
          <Typography variant="body1" color='white'>
          Av. Sen. Ruy Carneiro, 300  
          </Typography>
          <Typography variant="body1" color='white'>
          Miramar, João Pessoa - PB    
          </Typography>
          <Typography variant="body1" color='white'>
          CEP 58039-181    
          </Typography>
          </Box>
          
          <Box item sx={{ my: 1, mx: 'auto', p: 3, mt: "2em" }}>
          <img clasname="logoAlphaSoft" src={logoAlphaSoft} height="100px" width = "100px"/>
          </Box>
      </Box>
        
  );
}

export default Footer;