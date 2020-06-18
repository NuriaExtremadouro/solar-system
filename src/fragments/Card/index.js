import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardFragment = (props) => {
  return (
    <>
      <Card style={{ margin: '10px', background: '#353a46' }}>
        <CardActionArea>
          <img
            src={props.data.image}
            height='auto'
            width='100%'
            alt='Card header'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{ color: '#fff', fontWeight: 'bold' }}>
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#bbb' }}>
              {props.data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" style={{ color: '#fff' }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardFragment;
