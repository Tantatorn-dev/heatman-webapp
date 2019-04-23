import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines } from "react-vis";
import { CardContent, Card, createStyles, Theme, WithStyles, withStyles, Typography, Grid, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const styles = (theme: Theme) => createStyles({
    chart: {
        width: 500,
        ...theme.mixins.gutters(),
        marginTop:10,
        marginBottom:20,
        paddingBottom: theme.spacing.unit * 2,
    },
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 28,
    }
});

export interface Props extends WithStyles<typeof styles> { };

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 16 },
    { x: 9, y: 5 }
];

const TemperatureChart = (props: Props) => {
    const { classes } = props;
    const [index, setIndex] = useState(0);
    return (
        <div>
            <Grid container justify="center">
                <Card className={classes.chart} >
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            History
                        </Typography>
                        <SwipeableViews index={index} onChangeIndex={() => { setIndex(index) }}>
                            <div>
                                <Typography className={classes.subtitle} color="textSecondary">
                                    Temperature
                                </Typography>
                                <Grid container justify="center">
                                    <XYPlot height={300} width={300}>
                                        <XAxis title="Time" />
                                        <YAxis title="Temperature" />
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <LineSeries data={data} />
                                    </XYPlot>
                                </Grid>
                            </div>
                            <div>
                                <Typography className={classes.subtitle} color="textSecondary">
                                    Humidity
                                </Typography>
                                <Grid container justify="center">
                                    <XYPlot height={300} width={300}>
                                        <XAxis title="Time" />
                                        <YAxis title="Humidity" />
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <LineSeries data={data} />
                                    </XYPlot>
                                </Grid>
                            </div>
                        </SwipeableViews>
                        <Tabs value={index} fullWidth onChange={(event, value) => { setIndex(value) }} >
                            <Tab label="Temperature" />
                            <Tab label="Humidity" />
                        </Tabs>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

TemperatureChart.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureChart);