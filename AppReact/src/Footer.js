import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logoAlphaSoft from './logo_alpha.png'
import "./Footer.css"

function Footer() {
  return (
      <div className="main-footer">
          <div className="endereco">
          <Typography variant="body1" color='white'>
          Av. Sen. Ruy Carneiro, 300  
          </Typography>
          <Typography variant="body1" color='white'>
          Miramar, João Pessoa - PB    
          </Typography>
          <Typography variant="body1" color='white'>
          CEP 58039-181    
          </Typography>
          </div>
          
          <div></div>
          <img src={logoAlphaSoft} height="100px" width = "100px"/>
      </div>
        
  );
}

export default Footer;