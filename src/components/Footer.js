import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logoAlphaSoft from './logo_alpha.png'

function Footer() {
  return (
    <Box  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection:'row',
    backgroundColor: "#002776", mt: '3em'}}>
          <Box item sx={{ my: 1, mx: 'auto', p: 1, mt: 4}}>
          <Typography variant="body2" color='white'>
          Av. Sen. Ruy Carneiro, 300  
          </Typography>
          <Typography variant="body2" color='white'>
          Miramar, João Pessoa - PB    
          </Typography>
          <Typography variant="body2" color='white'>
          CEP 58039-181    
          </Typography>
          </Box> 
          <Box item sx={{ my: 1, mx: 'auto', p: 1}}>
          <img className="logoAlphaSoft" src={logoAlphaSoft} height="100px" width = "100px"/>
          </Box>
      </Box>
        
  );
}

export default Footer;