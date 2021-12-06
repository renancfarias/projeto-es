import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Footer from './Footer'


const prefeitos = [{nome:'João da Silva', partido: "PPP", votos: 456},
{nome: 'Maria Pereira', partido: "PPA", votos: 562}]

const vereadores = [ {nome:'Cláudio Brito', partido: "PPC", votos: 102},
{nome: 'Maria da Penha', partido: "PPD", votos: 54},
{nome: 'Lucas Filho', partido: "PPE", votos: 73},
{nome: 'Geraldo Ribeiro', partido: "PPF", votos: 23}]

function Card (props){
  return(
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt={props.nome}></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{props.nome}</Typography>
            <Typography noWrap variant="body2" color="text.secondary">Partido: {props.partido}</Typography>
          </Grid>
          <Grid item xs={5} zeroMinWidth>
            <TextField id="votos" label="N° de votos" variant="outlined" size="small" /*sx={{width: "7em"}}*//>
          </Grid>
        </Grid>
      </Paper>
    )
}

function CardSimples(props){
  return(
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2}}>
        
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{props.titulo}: </Typography>
          </Grid>
          <Grid item xs={5} zeroMinWidth>
            <TextField id="votos" label={props.textFieldLabel} variant="outlined" size="small" /*sx={{width: "7em"}}*//>
          </Grid>
        </Grid>
      </Paper>
    )
}

export default function Form() {
  return (
    <>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3}}>

      <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
          </Box>

      <CardSimples titulo="Seção" textFieldLabel="N° da seção"/>

        <Box sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
            <Typography variant='h5'> Prefeito(a)</Typography>
        </Box>

      {
        prefeitos.map((prefeito) => Card(prefeito))
      }

      <CardSimples titulo="Número total de votos" textFieldLabel="N° de votos"/>
      <CardSimples titulo="Brancos" textFieldLabel="N° de votos"/>
      <CardSimples titulo="Nulos" textFieldLabel="N° de votos"/>


      <Box sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Typography variant='h5' alignenter> Vereador(a)</Typography>
      </Box>

      {
        vereadores.map((vereador) => Card(vereador))
      }


      <CardSimples titulo="Número total de votos" textFieldLabel="N° de votos"/>
      <CardSimples titulo="Brancos" textFieldLabel="N° de votos"/>
      <CardSimples titulo="Nulos" textFieldLabel="N° de votos"/>

        <Box textAlign='right' sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
            <Button variant="contained" size="large" color="primary" sx={{justifyContent: 'right'}}>
            Enviar
            </Button>
        </Box>
        
    </Box>
    <Footer/>
    </>
  );
}