import React from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    gridList: {
        justifyContent: 'space-between',
        minHeight: 'inherit',
        alignItems: 'center',
        width: 'inherit',
    },
})

function ScoreBadge(props) {
    // const { width, height, classes } = props
    const { totalScore } = props
    return (
        <div style={{
            flex: 1,
            borderRadius: 25,
            margin: "10px 15px 0 15px",
            padding: 10,
            border: '0.15em solid #EABA00',
            // width,
            height: 130,
            justifyContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            //: 0,
        }}>
            <h4 style={{ margin: 0 }}>SCORE</h4>
            <Divider width='100%' />
            <div style={{ borderRadius: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', width: 40, height: 40, background: '#EABA00' }}>
                {totalScore}
            </div>

        </div>
    )
}

export default withStyles(styles)(ScoreBadge);