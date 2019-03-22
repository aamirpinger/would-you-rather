import React from 'react';
import Avatar from './Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/QuestionBoard'

function QuestionBoard(props) {
    const { classes, avatarURL, authorName, children } = props
    return (
        <div name="abc" className={classes.centerScreen}>
            <Avatar width={150} height={150} avatarURL={avatarURL} authorName={authorName} />
            <div className={classes.body} />
            {children}
        </div>
    )
}

export default withStyles(styles)(QuestionBoard);