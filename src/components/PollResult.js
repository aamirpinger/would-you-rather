import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PollBar from './PollBar'
import styles from './styles/PollResult'

class PollResult extends Component {
    render() {
        const { question, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.heading}>
                    <Typography variant="h4" component="h3" >
                        Results:
                    </Typography>
                </div>
                <PollBar option={question.optionOne} />
                <PollBar option={question.optionTwo} />

            </div>
        );
    }
}

export default withStyles(styles)(PollResult);