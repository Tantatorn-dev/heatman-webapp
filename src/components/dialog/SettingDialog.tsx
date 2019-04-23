import React, { useState } from "react";
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dialog, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider, Slide } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';

const styles = createStyles({
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
});

function Transition(props: Props) {
    return <Slide direction="up" {...props} />;
}

export interface Props extends WithStyles<typeof styles> { };

const SettingDialog = (props: Props) => {
    const [open, setOpen] = useState(false);
    const { classes } = props;
    return (
        <div>
            <div>
                <IconButton className={classes.menuButton} onClick={() => { setOpen(true) }} color="inherit" aria-label="Menu">
                    <SettingsIcon />
                </IconButton>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={() => { setOpen(false) }}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => { setOpen(false) }} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                SETTINGS
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        </div>
    );
}

SettingDialog.propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SettingDialog);