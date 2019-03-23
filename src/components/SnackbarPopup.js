import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles/SnackbarPopup'

class SnackbarPopup extends React.Component {
    state = {
        open: true,
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes, close } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={(close) ? false : this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    className={classes.position}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Click <MenuIcon /> to open the menu drawer</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

SnackbarPopup.propTypes = {
    classes: PropTypes.object.isRequired,
    close: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SnackbarPopup);
