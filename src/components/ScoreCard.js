import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        textAlign: 'left',
        padding: 0,

    },
    gridList: {
        //  justifyContent: 'flex-start',
        // minHeight: 'inherit',
        //  alignItems: 'flex-start',
        textAlign: 'left',
        // width: 'inherit',
        //  minWidth: '100%',
        border: '5px solid black',
        //  height: 'inherit',
        //  margin: 0,
    },
})

function ScoreCard(props) {
    const { classes, name, questionAsked, answered } = props
    return (

        <div className={classes.root}>
            <h1 style={{ margin: '15px 15px 15px 5px', }}>{name}</h1>
            <Divider style={{ backgroundColor: "#EABA00" }} />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
                <Typography variant="h6" component="p" style={{ textAlign: 'left', display: 'flex', marginTop: 15, marginLeft: 8 }}>
                    {`Answered Question: ${answered}`}
                </Typography>
                <Divider />
                <Typography variant="h6" component="p" style={{ textAlign: 'left', display: 'flex', marginBottom: 15, }}>
                    {`Created Question: ${questionAsked}`}
                </Typography>
            </div>
        </div>
    )
}
export default withStyles(styles)(ScoreCard);