import React from 'react';
import Avatar from './Avatar';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    // root: {
    //     // ...theme.mixins.gutters(),
    //     // paddingTop: theme.spacing.unit * 2,
    //     // paddingBottom: theme.spacing.unit * 2,
    //     display: 'flex',
    //     width: 600,
    //     minHeight: 270,
    //     // justifyContent: 'center',
    //     alignItems: 'center',
    //     // textAlign: 'center',
    // },
    centerScreen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 'inherit',
    },
})

function QuestionBoard(props) {
    const { classes, avatarURL, authorName, children } = props
    return (
        <div name="abc" className={classes.centerScreen}>
            <Avatar width={150} height={150} avatarURL={avatarURL} authorName={authorName} />
            <div style={{
                minHeight: 'inherit',
                border: '0.05em solid silver',
            }} />
            {/* <QuestionAttempt /> */}
            {/* <PollResult /> */}
            {children}
        </div>
    )
}

export default withStyles(styles)(QuestionBoard);