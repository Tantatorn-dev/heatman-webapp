import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { createStyles, WithStyles, Slide, IconButton, Dialog, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Divider, withStyles, MenuItem, Select, Theme, Switch } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useGlobal } from "reactn";

const styles = (theme: Theme) => createStyles({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
        fontFamily: "'Source Code Pro', monospace"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    select: {
        marginRight: 120,
        minWidth: 50
    },
});

function Transition(props: Props) {
    return <Slide direction="up" {...props} />;
}

export interface Props extends WithStyles<typeof styles> {
    open: boolean
};

const EditTheSensors = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useGlobal('state');

    const { classes } = props;

    const handleChange = (name: string) => (event: any) => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <ListItem button onClick={() => { setOpen(true) }}>
                <ListItemText
                    primary="Edit the sensors"
                    secondary="Enable and disable sensors" />
            </ListItem>
            <Dialog
                fullScreen
                open={open}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={() => { setOpen(false) }}
                            aria-label="Close">
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6"
                            color="inherit"
                            className={classes.flex}>
                            EDIT THE SENSORS
                            </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="DHT11_1"
                        />
                        <Switch checked={state.DHT11_1}
                            onChange={handleChange('DHT11_1')}
                            value="DHT11_1"
                            color="primary"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="DHT11_2"
                        />
                        <Switch checked={state.DHT11_2}
                            onChange={handleChange('DHT11_2')}
                            value="DHT11_2"
                            color="primary"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="DHT11_avg"
                        />
                        <Switch checked={state.DHT11_avg}
                            onChange={handleChange('DHT11_avg')}
                            value="DHT11_avg"
                            color="primary"
                        />
                    </ListItem>
                    <Divider />
                </List>
            </Dialog>
        </div>
    )
}

EditTheSensors.propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(EditTheSensors);