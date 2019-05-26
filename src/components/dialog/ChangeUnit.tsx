import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { createStyles, WithStyles, IconButton, Dialog, AppBar, Toolbar, Typography, List, ListItem, ListItemText, Divider, withStyles, MenuItem, Select, Theme } from '@material-ui/core';
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

const ChangeUnit = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [openSelect,setOpenSelect] = useState(false);
    const [unit, setUnit] = useGlobal("unit");
    const { classes } = props;

    function handleChangeUnit(event: any) {
        setUnit(event.target.value);
    }

    function handleCloseSelect() {
        setOpenSelect(false);
    }

    function handleOpenSelect() {
        setOpenSelect(true);
    }

    return (
        <div>
            <ListItem button onClick={()=>{setOpen(true)}}>
                <ListItemText
                    primary="Change temperature unit"
                    secondary="Celsius Fahrenheit Kelvin"
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
                            CHANGE TEMPERATURE UNIT
                            </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button disableRipple disableTouchRipple>
                        <ListItemText
                            primary="Temperature Unit"
                        />
                        <Select
                            open={openSelect}
                            onChange={handleChangeUnit}
                            onClose={handleCloseSelect}
                            onOpen={handleOpenSelect}
                            value={unit}
                            inputProps={{
                                name: 'temperature-unit',
                                id: 'select-temperature-unit',
                            }}
                            className={classes.select}
                        >
                            <MenuItem value={"Celsius"}>Celsius</MenuItem>
                            <MenuItem value={"Kelvin"}>Kelvin</MenuItem>
                            <MenuItem value={"Fahrenheit"}>Fahrenheit</MenuItem>
                        </Select>
                    </ListItem>
                    <Divider />
                </List>
            </Dialog>
        </div>
    )
}

ChangeUnit.propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(ChangeUnit);