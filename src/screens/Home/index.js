import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '../../fragments/Card';

const posts = [
  {
    image: 'https://m.airdroid.com/2006151645/img/home/banner.jpg',
    name: 'PWA promo',
    title: 'Did you know...?',
    description: 'Our website can also be added to the main screen of your phone. You can find this option under the three-dot menu of your browser. Check it out!'
  },
  {
    image: 'https://www.sciencealert.com/images/articles/processed/PIA12114_web_1024.jpg',
    name: 'Intro',
    title: 'Welcome to Solar System!',
    description: 'How much do you know about the vicinity of our planet? Would you like to learn some more? Solar System is an app where you will be able to find all sort of info and facts about our system and much more. Soon we will add more content, so stay tuned!'
  }
];

const Home = () => {
  return (
    <>
      <Grid container xs={12}>
        <Hidden xsDown>
          <Grid xs={1} sm={3} />
        </Hidden>
        <Grid xs={12} sm={6}>
          {posts.map(post => <Card data={post} />)}
        </Grid>
        <Hidden xsDown>
          <Grid xs={1} sm={3} />
        </Hidden>
      </Grid>
    </>
  );
}

export default Home;
