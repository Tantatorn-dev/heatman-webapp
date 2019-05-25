import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import axios from "axios";
import Button from '@material-ui/core/Button';

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
    title: {
        fontSize: 28,
    },
    button: {
        fontSize: 20,
        color: "white",
        background: "red !important"
    },
    toggledButton: {
        fontSize: 20,
        color: "white",
        background: "steelblue !important",
    },

});

export interface Props extends WithStyles<typeof styles> { }


const ControlFan = (props: Props) => {
    const { classes } = props;
    const [fan, toggleFan] = useState(false);
    const updateData = async (device: string) => {
        const url = "https://heatman-b390e.firebaseio.com/Fan.json";
        const response = await axios.put(url, {state: fan?"OFF":"ON"});
        console.log(response);
    }
    return (
        <div>
            <Grid container justify="center" style={{ paddingTop: 10 }}>
                <Paper className={classes.root} elevation={1} >
                    <Typography className={classes.title} color="textSecondary">Fan System</Typography>
                            <Button variant="contained"
                                className={fan ? classes.toggledButton : classes.button}
                                onClick={() => { toggleFan(!fan); updateData("AlarmLED") }}>
                                Main Fan
                            </Button>
                </Paper>
            </Grid>
        </div >
    );
}

ControlFan.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(ControlFan);