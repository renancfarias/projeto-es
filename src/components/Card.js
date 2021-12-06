import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import defaultImg from './media.png'
import TextField from '@mui/material/TextField'; 

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image = {defaultImg}
          alt="foto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.partido}
          <Typography variant="body2" color="text.secondary" sx={{mt: '1em'}} >
            CARGO: {props.cargo}
          </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField id="votos" label="N° de votos" variant="outlined" size="small" sx={{width: "7em"}}/>
        <Button variant="contained" size="medium" color="primary" sx={{ml: "1em"}}>
          Enviar
        </Button>
      </CardActions>
    </Card>
  );
}