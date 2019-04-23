import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
                35.72 &deg;C
          </Typography>
            </div>
            <div>
              <Typography className={classes.subtitle} color="textSecondary">
                Humidity
          </Typography>
              <Typography className={classes.deg} variant="h3" component="h3">
                75 % RH
          </Typography>
            </div>
          </AutoPlaySwipeableViews>
        </Paper>
      </Grid>
    </div>
  );
}

TemperatureDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureDisplay);