import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 300,
  },
  deg: {
    fontFamily: '"orbitron", sans-serif'
  }
});

export interface Props extends WithStyles<typeof styles> { }

const TemperatureDisplay = (props: Props) => {
  const { classes } = props;

  return (
    <div>
      <Grid container justify="center" style={{paddingTop:10}}>
        <Paper className={classes.root} elevation={1} >
          <Typography className={classes.deg} variant="h3" component="h3">
              35.72 &deg;C
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

TemperatureDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureDisplay);