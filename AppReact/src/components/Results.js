import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';


const candidatos = ['João da Silva', 'Maria Pereira', 'Cláudio Brito', 'Maria da Penha', 'Lucas Filho', 'Geraldo Ribeiro']

export default function Form() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3}}>
        <Grid item xs zeroMinWidth textAlign="center" sx={{mt:"1em"}}>
            <Typography noWrap variant='h4'> Resutado da apuração</Typography>
        </Grid>

    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2, mt: "2em" }}>     
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Seções apuradas: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>1356</Typography>
          </Grid>
        </Grid>
      </Paper>

        <Box sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
            <Typography variant='h5'>Prefeito(a)</Typography>
        </Box>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>JS</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>João da Silva</Typography>
            <Typography noWrap variant="body2" color="text.secondary">Partido: PPP</Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>456</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>MP</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Maria Pereira</Typography>
            <Typography noWrap variant="body2" color="text.secondary">Partido: PPA</Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>46</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>N° total de votos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>379</Typography>
            </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Brancos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>456</Typography>
            </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Nulos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>78</Typography>
            </Grid>
        </Grid>
      </Paper>



        <Box sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
            <Typography variant='h5' alignenter> Vereador(a)</Typography>
        </Box>

        <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>CB</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Cláudio Brito</Typography>
              <Typography noWrap variant="body2" color="text.secondary">Partido: PPC</Typography>
            </Grid>
            <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>167</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>MP</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Maria da Penha</Typography>
              <Typography noWrap variant="body2" color="text.secondary">Partido: PPD</Typography>
            </Grid>
            <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>23</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>LF</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Lucas Filho</Typography>
              <Typography noWrap variant="body2" color="text.secondary">Partido: PPE</Typography>
            </Grid>
            <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>45</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>GF</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Geraldo Ribeiro</Typography>
              <Typography noWrap variant="body2" color="text.secondary">Partido: PPF</Typography>
            </Grid>
            <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>59</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Nº total de votos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>379</Typography>
            </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Brancos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>76</Typography>
            </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Nulos: </Typography>
          </Grid>
          <Grid item xs zeroMinWidth textAlign='right'>
            <Typography noWrap>48</Typography>
            </Grid>
        </Grid>
      </Paper>

        
    </Box>
  );
}