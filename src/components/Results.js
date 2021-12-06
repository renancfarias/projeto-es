import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ProgressBar from './ProgressBar';
import Footer from './Footer'
import { ReportProblemSharp } from '@mui/icons-material';

const secoes = 15
const numSecoes  = 27

const prefeitos = [{nome:'João da Silva', partido: "PPP", votos: 134},
{nome: 'Maria Pereira', partido: "PPA", votos: 147}]

const prefeitoVotosInvalidos = {brancos: 45, nulos: 67}

const vereadores = [ {nome:'Cláudio Brito', partido: "PPC", votos: 102},
{nome: 'Maria da Penha', partido: "PPD", votos: 54},
{nome: 'Lucas Filho', partido: "PPE", votos: 73},
{nome: 'Geraldo Ribeiro', partido: "PPF", votos: 40}]

const vereadorVotosInvalidos= {brancos: 37, nulos: 76}

function somaVotosValidos (listaDeCandidatos){
  
  return listaDeCandidatos.map((a)=>a.votos).reduce((a,b)=>a+b)
}

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
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>{props.votos}</Typography>
          </Grid>   
        </Grid>
        <Grid item xs zeroMinWidth sx={{mt: "1em" }}>
          <ProgressBar progress={ props.votos / props.votosValidosTotais * 100} />
        </Grid>
      </Paper>
    )
}

function CardSimples(props){
  return(
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2}}>     
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{props.titulo} </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>{props.numero}</Typography>
          </Grid>
        </Grid>
      </Paper>
    )
}

export default function Results() {
  return (
  <>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3}}>
        <Grid item xs zeroMinWidth textAlign="center" sx={{mt:"1em"}}>
            <Typography noWrap variant='h4'> Resutado da apuração</Typography>
        </Grid>
    
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
        </Box>

      <CardSimples titulo="Seções apuradas" numero={secoes}/>
    
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
            <Typography variant='h5'>Prefeito(a)</Typography>
        </Box>

      {
        prefeitos.map(function(prefeito){
          prefeito.votosValidosTotais = somaVotosValidos(prefeitos)
          return Card(prefeito)
        })
      }

      <CardSimples titulo="N° total de votos:" numero= {somaVotosValidos(prefeitos) + prefeitoVotosInvalidos.brancos +
      prefeitoVotosInvalidos.nulos}/>
      <CardSimples titulo="Brancos:" numero= {prefeitoVotosInvalidos.brancos}/>
      <CardSimples titulo="Nulos:" numero= {prefeitoVotosInvalidos.nulos}/>

        <Box sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
            <Typography variant='h5' alignenter> Vereador(a)</Typography>
        </Box>

        {
        vereadores.map(function(vereador){
          vereador.votosValidosTotais = somaVotosValidos(vereadores)
          return Card(vereador)
        })
        }

        <CardSimples titulo="Nº total de votos:" numero= {somaVotosValidos(vereadores) + prefeitoVotosInvalidos.brancos + 
        prefeitoVotosInvalidos.nulos}/>
        <CardSimples titulo="Brancos:" numero= {vereadorVotosInvalidos.brancos}/>
        <CardSimples titulo="Nulos:" numero= {vereadorVotosInvalidos.nulos}/>
    </Box>
    <Footer/>
    </>
  );
}