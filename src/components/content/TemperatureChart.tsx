import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot, XAxis, YAxis, LineSeries,VerticalGridLines,HorizontalGridLines } from "react-vis";
import { CardContent, Card, createStyles, Theme, WithStyles, withStyles, Typography, Grid } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    chart: {
        width: 500,
        paddingTop: 15,
        margin: theme.spacing.unit,
    },
    title: {
        fontSize: 32,
    },
    subtitle:{
        fontSize:28,
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
    return (
        <div>
            <Grid container justify="center">
            <Card className={classes.chart} >
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        History
                    </Typography>
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