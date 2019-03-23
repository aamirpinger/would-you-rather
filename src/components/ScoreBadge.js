import React from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ScoreBadge'
import PropTypes from 'prop-types';

function ScoreBadge(props) {
    const { totalScore, classes } = props
    return (
        <div className={classes.main}>
            <h4 style={{ margin: 0 }}>SCORE</h4>
            <Divider width='100%' />
            <div className={classes.score}>
                {totalScore}
            </div>

        </div >
    )
}

ScoreBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    totalScore: PropTypes.number.isRequired,
};


export default withStyles(styles)(ScoreBadge);