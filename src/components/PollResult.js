import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PollBar from './PollBar'
import styles from './styles/PollResult'

function PollResult(props) {
    const { question, classes } = props;
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
PollResult.propTypes = {
    classes: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollResult);