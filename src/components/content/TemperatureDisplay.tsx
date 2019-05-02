import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from "axios";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 500,
  },
  deg: {
    fontFamily: '"orbitron", sans-serif'
  },
  subtitle: {
    fontSize: 28,
  }
});

export interface Props extends WithStyles<typeof styles> { }

const TemperatureDisplay = (props: Props) => {
  const { classes } = props;
  const [index, setIndex] = useState(0);
  const [temperature, setTemperature] = useState(13.0);
  const [humidity, setHumidity] = useState(75.0);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/dht11.json?print=pretty")
      .then(res => {
        console.log(res.data.temperature);
        setTemperature(res.data.temperature);
      })
    }, 1000
    );
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/dht11.json?print=pretty")
      .then(res => {
        console.log(res.data.humidity);
        setHumidity(res.data.humidity);
      })
    }, 1000
    );
  });
  return (
    <div>
      <Grid container justify="center" style={{ paddingTop: 10 }}>
        <Paper className={classes.root} elevation={1} >
          <Tabs value={index} fullWidth onChange={(event, value) => { setIndex(value) }} >
            <Tab label="Temperature" />
            <Tab label="Humidity" />
          </Tabs>
          <AutoPlaySwipeableViews index={index} onChangeIndex={() => { setIndex(index) }} enableMouseEvents >
            <div>
              <Typography className={classes.subtitle} color="textSecondary">
                Temperature
          </Typography>
              <Typography className={classes.deg} variant="h3" component="h3">
                {temperature}  &deg;C
                    </Typography>
            </div>
            <div>
              <Typography className={classes.subtitle} color="textSecondary">
                Humidity
          </Typography>
              <Typography className={classes.deg} variant="h3" component="h3">
                {humidity} % RH
          </Typography>
            </div>
          </AutoPlaySwipeableViews>
        </Paper>
      </Grid>
    </div >
  );
}

TemperatureDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureDisplay);