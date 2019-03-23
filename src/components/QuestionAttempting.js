import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Panel from './Panel'
import WhiteCard from './WhiteCard'
import QuestionBoard from './QuestionBoard'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { dispatch_saveQuestionAnswerAction } from '../actions/actionDispatchers'
import PollResult from './PollResult';
import styles from './styles/QuestionAttempting'

class QuestionAttempting extends Component {
    state = {
        optionSelected: null,
        submited: this.props.alreadyAnswered
    }


    handleChange = (e) => {
        this.setState({ optionSelected: e.target.value })
    }

    handleSubmit = () => {
        const { authedUser, } = this.props
        const qid = this.props.question.id
        const answer = this.state.optionSelected

        if (this.state.optionSelected) {
            this.props.saveAnswer(authedUser, qid, answer)
                .then(() => this.setState({ submited: true }))
        }
        else {
            alert("Please select any one option to submit")
        }
    }



    render() {
        const { classes, question, authorName, avatarURL, QuestionNotFound } = this.props;
        const { submited } = this.state

        return (QuestionNotFound)
            ? <Redirect to='/error' />
            : (
                <Panel headerType={`${authorName} ${(!submited) ? 'asks' : 'asked'}`} >
                    <WhiteCard>
                        <QuestionBoard avatarURL={avatarURL} authorName={authorName}>
                            {
                                (!submited)
                                    ? <div className={classes.root}>
                                        <Typography variant="h4" component="h3" className={classes.heading}>
                                            Would you rather...
                                    </Typography>
                                        <Divider style={{ marginLeft: 20, marginRight: 20 }} />

                                        <RadioGroup
                                            aria-label="position"
                                            name="position"
                                        >
                                            <FormControlLabel
                                                value="optionOne"
                                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                                label={question.optionOne.text}
                                                labelPlacement="end"
                                                classes={{ label: classes.answerLabels }}
                                                onClick={this.handleChange}
                                            />
                                            <FormControlLabel
                                                value="optionTwo"
                                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                                label={question.optionTwo.text}
                                                labelPlacement="end"
                                                classes={{ label: classes.answerLabels }}
                                                onClick={this.handleChange}
                                            />
                                        </RadioGroup>

                                        <Button variant="contained" className={classes.button} onClick={this.handleSubmit} >
                                            Submit
                                    </Button>
                                    </div>
                                    : <PollResult question={question} />
                            }
                        </QuestionBoard>
                    </WhiteCard>
                </Panel>
            );
    }
}


QuestionAttempting.propTypes = {
    classes: PropTypes.object.isRequired,
    authorName: PropTypes.string,
    saveAnswer: PropTypes.func,
    question: PropTypes.object,
    avatarURL: PropTypes.string,
    authedUser: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    alreadyAnswered: PropTypes.bool,
};

QuestionAttempting = withStyles(styles)(QuestionAttempting);

const mapDispatchToProps = (dispatch) => ({
    saveAnswer: (authedUser, qid, answer) => dispatch(dispatch_saveQuestionAnswerAction(authedUser, qid, answer))
})


const mapStateToProps = (state, ownProps) => {
    const { qid } = ownProps.match.params
    // alert(state.questions[qid])
    return {
        question: (state.questions[qid]) ? state.questions[qid] : null,
        authorName: (state.questions[qid]) ? state.users[state.questions[qid].author].name : null,
        authedUser: (state.questions[qid]) ? state.authedUser : null,
        alreadyAnswered: (state.questions[qid]) ? state.users[state.authedUser].answers.hasOwnProperty(qid) : null,
        avatarURL: (state.questions[qid]) ? state.users[state.questions[qid].author].avatarURL : null,
        QuestionNotFound: (!state.questions[qid]) && true
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionAttempting))