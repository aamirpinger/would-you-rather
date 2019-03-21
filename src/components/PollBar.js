import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    bar: {
        background: "#EABA00",
    },
    badge: {
        borderRadius: 200,
        width: 40,
        height: 40,
        right: 5,
        wordWrap: 'break-word',
        backgroundColor: "red",
    },
})

function PollBar(props) {
    const { classes, authedUser, option, totalVotes } = props;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "#f1f1c0",
            border: '0.05em solid #EABA00',
            margin: 15,
            borderRadius: 3
        }}>

            <div style={{
                marginTop: 8,
                marginLeft: 8,
                marginBottom: 20,
            }}>
                <Typography variant="h6" component="p" style={{ textAlign: 'left', display: 'flex', }}>
                    {`Would you rather ${option.text}`}
                </Typography>
            </div>

            <Badge className={classes.margin} classes={{ badge: classes.badge }} badgeContent={(option.votes.indexOf(authedUser) >= 0) ? "your vote" : ""} color="primary" >
                <div />
            </Badge>

            <div style={{
                borderRadius: 5,
                margin: "0 20px 10px 20px",
                padding: 2,
                border: '0.05em solid #EABA00',
            }}>

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

            <Typography variant="h6" component="p" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {option.votes.length} out of {totalVotes} votes
            </Typography>

        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
    const { qid } = ownProps.match.params
    return {
        authedUser: state.authedUser,
        totalVotes: state.questions[qid].optionOne.votes.length + state.questions[qid].optionTwo.votes.length
    }
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(PollBar)))