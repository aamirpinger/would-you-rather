import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles/Panel'

function Panel(props) {
    const { classes, headerType, children } = props;

    return (
        <div className={classes.centerScreen}>
            <div >
                <div style={{ float: 'left' }} >
                    <Typography variant="h5"
                        style={{
                            display: 'block',
                            textAlign: 'left',
                            padding: 5,
                            paddingLeft: 8,
                            height: 40,
                            borderTopRightRadius: 7,
                            borderTopLeftRadius: 7,
                            backgroundColor: "#EABA00",
                        }}
                        component="h3">
                        {headerType}
                    </Typography>
                </div>
                {children}
            </div>
        </div>
    );
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Panel)