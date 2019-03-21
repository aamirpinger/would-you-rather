import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    centerScreen: {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',

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
    GridListTile: {
        // height: 'auto',
        // margin: 0,
        // justifyContent: 'flex-start',
    },
})

function ScoreCard(props) {
    const { username } = props
    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', textAlign: 'left', padding: 0, }}>
            {/* <Typography variant="h4" component="h1" style={{  display: 'flex', height: 50, marginTop: 10, }}> */}
            <h1 style={{ margin: '15px 15px 15px 5px', }}>{username}</h1>
            {/* </Typography> */}
            <Divider style={{ backgroundColor: "#EABA00" }} />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
                <Typography variant="h6" component="p" style={{ textAlign: 'left', display: 'flex', marginTop: 15, }}>
                    Answered Question: 5
                </Typography>
                <Divider />
                <Typography variant="h6" component="p" style={{ textAlign: 'left', display: 'flex', marginBottom: 15, }}>
                    Unanswered Question: 5
                </Typography>
            </div>
        </div>
    )
}
export default withStyles(styles)(ScoreCard);