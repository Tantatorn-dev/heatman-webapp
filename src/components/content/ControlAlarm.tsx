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
        marginBottom:30,
    },
    deg: {
        fontFamily: '"orbitron", sans-serif'
    },
    title: {
        fontSize: 28,
    },
    button: {
        fontSize: 20,
    },
    toggledButton: {
        fontSize: 20,
        color: "white",
        background: "red !important",
    },

});

export interface Props extends WithStyles<typeof styles> { }


const ControlAlarm = (props: Props) => {
    const { classes } = props;
    const [alarmLED, toggleAlarmLED] = useState(false);
    const [siren, toggleSiren] = useState(false);
    const updateData = async (device: string) => {
        const url = `https://heatman-b390e.firebaseio.com/${device}.json`;
        const response = await axios.put(url, {state: device=="AlarmLED"?alarmLED?"OFF":"ON":siren?"OFF":"ON"});
        console.log(response);
    }
    const initData =    async ()=>{
            const response = await axios
            .get("https://heatman-b390e.firebaseio.com/.json")
            .then(
                (res)=>{
                    if(res.data.Siren.state=="ON"){
                        toggleSiren(true);
                    }
                    else if(res.data.Siren.state=="OFF"){
                        toggleSiren(false);
                    }
                    if(res.data.AlarmLED.state=="ON"){
                        toggleAlarmLED(true);
                    }
                    else if(res.data.AlarmLED.state=="OFF"){
                        toggleAlarmLED(false);
                    }
                }
            )
        }
    useEffect(()=>{
        initData();
    },[]);
    return (
        <div>
            <Grid container justify="center" style={{ paddingTop: 10 }}>
                <Paper className={classes.root} elevation={1} >
                    <Typography className={classes.title} color="textSecondary">Alarm System</Typography>
                    <Grid container spacing={16}>
                        <Grid item>
                            <Button variant="contained"
                                className={alarmLED ? classes.toggledButton : classes.button}
                                onClick={() => { toggleAlarmLED(!alarmLED); updateData("AlarmLED") }}>
                                Alarm LED
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained"
                                className={siren ? classes.toggledButton : classes.button}
                                onClick={() => { toggleSiren(!siren); updateData("Siren");  }}>
                                Siren
                                </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div >
    );
}

ControlAlarm.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(ControlAlarm);