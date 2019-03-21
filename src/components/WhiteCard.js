import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        display: 'flex',
        width: 600,
        minHeight: 270,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function WhiteCard(props) {
    const { classes, children } = props;

    return (
        <div style={{ display: 'block', paddingTop: 10, }}>
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