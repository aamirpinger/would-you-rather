import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        // ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        width: 600,
        minHeight: 270,
        // justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
    },
    centerScreen: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'center',
        //minHeight: '93vh',
        // backgroundColor: "#f1f1c0",
        paddingTop: 20,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },

});

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