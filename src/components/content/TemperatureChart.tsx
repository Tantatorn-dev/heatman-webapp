import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot,XAxis,YAxis,LineSeries } from "react-vis";
import { CardContent, Card, CardHeader, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

const styles =(theme:Theme)=> createStyles({
    chart:{
        maxWidth:"40%",
        paddingTop:15,
        margin: theme.spacing.unit,
    }
});

export interface Props extends WithStyles<typeof styles>{};

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

const TemperatureChart = (props:Props) => {
    const {classes} = props;
    return (
        <div>
            <Card className={classes.chart}>
                <CardHeader>

                </CardHeader>
                <CardContent>
            <XYPlot height={300} width={300}>
                <XAxis />
                <YAxis />
                <LineSeries data={data} />
            </XYPlot> 
            </CardContent>
            </Card>
        </div>
    )
}

TemperatureChart.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TemperatureChart);