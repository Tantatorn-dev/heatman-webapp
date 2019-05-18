import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from "axios";
import { useGlobal } from 'reactn';

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
  const [global,setGlobal] = useGlobal();
  const [index, setIndex] = useState({
    index1: 0,
    index2: 0,
    index3: 0
  });
  const [temperature_1, setTemperature_1] = useState(13.0);
  const [humidity_1, setHumidity_1] = useState(75.0);
  const [temperature_2, setTemperature_2] = useState(13.0);
  const [humidity_2, setHumidity_2] = useState(75.0);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/DHT11_1.json?print=pretty")
        .then(res => {
          console.log(res.data.temperature);
          setTemperature_1(res.data.temperature);
        })
    }, 1000
    );
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/DHT11_1.json?print=pretty")
        .then(res => {
          console.log(res.data.humidity);
          setHumidity_1(res.data.humidity);
        })
    }, 1000
    );
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/DHT11_2.json?print=pretty")
        .then(res => {
          console.log(res.data.temperature);
          setTemperature_2(res.data.temperature);
        })
    }, 1000
    );
    setTimeout(() => {
      axios
        .get("https://heatman-b390e.firebaseio.com/DHT11_2.json?print=pretty")
        .then(res => {
          console.log(res.data.humidity);
          setHumidity_2(res.data.humidity);
        })
    }, 1000
    );
  });
  return (
    <div>
      {
        global.state.DHT11_1 &&
        <Grid container justify="center" style={{ paddingTop: 10 }}>
          <Paper className={classes.root} elevation={1} >
            <Typography>DHT11_1</Typography>
            <Tabs value={index.index1} fullWidth onChange={
              (event, value) => {
                const newObj = { index1: value, index2: index.index2, index3: index.index3 }
                setIndex(newObj);
              }} >
              <Tab label="Temperature" />
              <Tab label="Humidity" />
            </Tabs>
            <AutoPlaySwipeableViews index={index.index1}
              onChangeIndex={() => { setIndex(index) }}
              enableMouseEvents >
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Temperature  
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {temperature_1}  &deg;C 
                    </Typography>
              </div>
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Humidity
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {humidity_1} % RH
          </Typography>
              </div>
            </AutoPlaySwipeableViews>
          </Paper>
        </Grid>
      }

      {
        global.state.DHT11_2 &&
        <Grid container justify="center" style={{ paddingTop: 10 }}>
          <Paper className={classes.root} elevation={1} >
            <Typography>DHT11_2</Typography>
            <Tabs value={index.index2} fullWidth onChange={
              (event, value) => {
                const newObj = { index1: index.index1, index2: value, index3: index.index3 }
                setIndex(newObj);
              }} >
              <Tab label="Temperature" />
              <Tab label="Humidity" />
            </Tabs>
            <AutoPlaySwipeableViews index={index.index2}
              onChangeIndex={() => { setIndex(index) }}
              enableMouseEvents >
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Temperature
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {temperature_2}  &deg;C
                    </Typography>
              </div>
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Humidity
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {humidity_2} % RH
          </Typography>
              </div>
            </AutoPlaySwipeableViews>
          </Paper>
        </Grid>
      }

      {
        global.state.DHT11_avg &&
        <Grid container justify="center" style={{ paddingTop: 10 }}>
          <Paper className={classes.root} elevation={1} >
            <Typography>DHT11_avg</Typography>
            <Tabs value={index.index3} fullWidth onChange={
              (event, value) => {
                const newObj = { index1: index.index1, index2: index.index2, index3: value }
                setIndex(newObj)
              }} >
              <Tab label="Temperature" />
              <Tab label="Humidity" />
            </Tabs>
            <AutoPlaySwipeableViews index={index.index3}
              onChangeIndex={() => { setIndex(index) }}
              enableMouseEvents >
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Temperature
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {(temperature_1 + temperature_2) / 2}  &deg;C
                    </Typography>
              </div>
              <div>
                <Typography className={classes.subtitle} color="textSecondary">
                  Humidity
          </Typography>
                <Typography className={classes.deg} variant="h3" component="h3">
                  {(humidity_1 + humidity_2) / 2} % RH
          </Typography>
              </div>
            </AutoPlaySwipeableViews>
          </Paper>
        </Grid>
      }

    </div >
  );
}

TemperatureDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureDisplay);