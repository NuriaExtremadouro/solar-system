import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '../../fragments/Card';

const asteroids = [
  {
    image: 'https://specials-images.forbesimg.com/imageserve/590133304/960x0.jpg?cropX1=14&cropX2=3465&cropY1=1805&cropY2=3422',
    name: 'Asteroids',
    title: 'Coming soon...',
    description: 'We are still adding content to our website, but soon we will have some interesting facts here as well as new sections. Stay tuned!'
  }
];

const Asteroids = () => {
  return (
    <>
      <Grid container xs={12}>
        <Hidden xsDown>
          <Grid xs={1} sm={3} />
        </Hidden>
        <Grid xs={12} sm={6}>
          {asteroids.map(asteroid => <Card data={asteroid} />)}
        </Grid>
        <Hidden xsDown>
          <Grid xs={1} sm={3} />
        </Hidden>
      </Grid>
    </>
  );
}

export default Asteroids;
