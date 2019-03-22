import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';


function Loader(props) {
    const { classes } = props;
    return (
        <CircularProgress />
    )
}


export default Loader