import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './styles/WhiteCard'

function WhiteCard(props) {
    const { classes, children } = props;

    return (
        <div className={classes.main}>
            <Paper className={classes.root} elevation={10} >
                {children}
            </Paper>
        </div>
    );
}

WhiteCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteCard);