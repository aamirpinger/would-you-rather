import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import styles from './styles/PollBar'
import PropTypes from 'prop-types';

function PollBar(props) {
    const { classes, authedUser, option, totalVotes } = props;

    return (
        <div className={classes.root}>

            <div className={classes.subHeadDiv}>
                <Typography variant="h6" component="p" className={classes.optionText}>
                    {`Would you rather ${option.text}`}
                </Typography>
            </div>

            <Badge className={classes.margin}
                classes={{ badge: classes.badge }}
                badgeContent={(option.votes.indexOf(authedUser) >= 0) ? "your vote" : ""}
                color="primary"
            >
                <div />
            </Badge>

            <div className={classes.barDiv}>

                <LinearProgress
                    variant="determinate"
                    value={(option.votes.length / totalVotes) * 100}
                    style={{
                        height: 25, width: "100%", borderRadius: 5,
                    }}
                    classes={{
                        barColorPrimary: classes.bar,
                    }}
                />
            </div>

            <Typography variant="h6" component="p" className={classes.footer}>
                {option.votes.length} out of {totalVotes} votes
            </Typography>

        </div>
    )
}

PollBar.propTypes = {
    classes: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    option: PropTypes.object.isRequired,
    totalVotes: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const { qid } = ownProps.match.params
    return {
        authedUser: state.authedUser,
        totalVotes: state.questions[qid].optionOne.votes.length + state.questions[qid].optionTwo.votes.length
    }
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(PollBar)))