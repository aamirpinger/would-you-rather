import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ErrorPage'

function ErrorPage(props) {
    const { classes } = props
    return (
        <div className={classes.centerScreen} >
            <Typography
                variant="h2"
                className={classes.text}
            >
                404 Error: Page not found
            </Typography>
        </div>
    )
}
export default withStyles(styles)(ErrorPage);