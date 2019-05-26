import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { createStyles, WithStyles, Slide, IconButton, Dialog, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Divider, withStyles, MenuItem, Select, Theme } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useGlobal } from 'reactn';

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

export interface Props extends WithStyles<typeof styles> {
    open: boolean
};

const SetAlarmLevel = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [openSelectTemperature, setOpenSelectTemperature] = useState(false);
    const [openSelectHumidity, setOpenSelectHumidity] = useState(false);
    const [temperature, setTemperature] = useGlobal('dangerousTemperature');
    const [humidity, setHumidity] = useGlobal('dangerousHumidity');
    const { classes } = props;

    function handleChangeTemp(event: any) {
        setTemperature(event.target.value);
    }

    function handleCloseTemp() {
        setOpenSelectTemperature(false);
    }

    function handleOpenTemp() {
        setOpenSelectTemperature(true);
    }

    function handleChangeHumid(event: any) {
        setHumidity(event.target.value);
    }

    function handleCloseHumid() {
        setOpenSelectHumidity(false);
    }

    function handleOpenHumid() {
        setOpenSelectHumidity(true);
    }

    return (
        <div>
            <ListItem button onClick={()=>{setOpen(true)}}>
                <ListItemText
                    primary="Set Alarm Level"
                    secondary="Set dangerous Temperature and Humidity level"
                />
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
                            SET ALARM LEVEL
                            </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="Set dangerous temperature"
                        />
                        <Select
                            open={openSelectTemperature}
                            onChange={handleChangeTemp}
                            onClose={handleCloseTemp}
                            onOpen={handleOpenTemp}
                            value={temperature}
                            inputProps={{
                                name: 'temperature',
                                id: 'select-dangerous-temperature',
                            }}
                            className={classes.select}
                        >
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                            <MenuItem value={80}>80</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </ListItem>
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="Set dangerous humidity"
                        />
                        <Select
                            open={openSelectHumidity}
                            onChange={handleChangeHumid}
                            onClose={handleCloseHumid}
                            onOpen={handleOpenHumid}
                            value={humidity}
                            inputProps={{
                                name: 'humidity',
                                id: 'select-dangerous-humidity',
                            }}
                            className={classes.select}
                        >
                            <MenuItem value={25}>25%</MenuItem>
                            <MenuItem value={50}>50%</MenuItem>
                            <MenuItem value={75}>75%</MenuItem>
                            <MenuItem value={100}>100%</MenuItem>
                        </Select>
                    </ListItem>
                    <Divider />
                </List>
            </Dialog>
        </div>
    )
}

SetAlarmLevel.propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SetAlarmLevel);