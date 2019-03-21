import React from 'react';
import ScoreCard from './ScoreCard'
import Avatar from './Avatar';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ScoreBadge from './ScoreBadge'

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        width: 'inherit',
    },
    gridList: {
        justifyContent: 'space-between',
        minHeight: 'inherit',
        alignItems: 'center',
        width: 'inherit',
        //minWidth: '100%'
        //        border: '1px solid red'
    },
    GridListTile: {
        //   width: 'inherit',
        // padding: 0,
    }
})

function LeaderBoard(props) {
    const { classes, username, avatarURL, authorName } = props
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={16} >
                <GridListTile cols={4.5}>
                    <Avatar width={150} height={150} avatarURL={avatarURL} authorName={authorName} />
                </GridListTile>
                <GridListTile cols={1} style={{ minHeight: 'inherit', width: 1, border: '0.05em solid silver', }} />
                <GridListTile cols={7.5} style={{ minHeight: 'inherit', }}>
                    <ScoreCard username={username} />
                </GridListTile>
                <GridListTile cols={1} style={{ minHeight: 'inherit', width: 1, border: '0.05em solid silver', }} />
                <GridListTile cols={3.5}>
                    <ScoreBadge width={100} height={150} />
                </GridListTile>
            </GridList>
        </div>
    )
}

export default withStyles(styles)(LeaderBoard);