import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontFamily:"'Source Code Pro', monospace"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export interface Props extends WithStyles<typeof styles> {}

const Bar = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            HEATMAN
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Bar);