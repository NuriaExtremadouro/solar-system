import React from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const { push } = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" style={{ background: '#353a46' }}>
        <Grid container xs={12}>
          <Hidden xsDown>
            <Grid xs={1} sm={3} />
          </Hidden>
          <Grid xs={12} sm={6} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Home" onClick={() => push('/home')} {...a11yProps(0)} />
              <Tab label="Planets" onClick={() => push('/planets')} {...a11yProps(1)} />
              <Tab label="Asteroids" onClick={() => push('/asteroids')} {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Hidden xsDown>
            <Grid xs={1} sm={3} />
          </Hidden>
        </Grid>
      </AppBar>
    </>
  );
}
