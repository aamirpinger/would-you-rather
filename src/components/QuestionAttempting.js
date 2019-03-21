import React, { Component } from 'react';

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
import { withRouter } from 'react-router-dom'
import { dispatch_saveQuestionAnswerAction } from '../actions/actionDispatchers'
import PollResult from './PollResult';

const styles = theme => ({
    answers: {
        marginLeft: 10,
        display: 'flex',

    },

    answerLabels: {
        fontSize: 18,
    },
    radio: {
        color: '#EABA00',
        padding: 30,
        '&$checked': {
            color: '#EABA00',
        }
    },
    checked: {},
    button: {
        border: "0.1em solid #EABA00",
        backgroundColor: "white",
        width: '100%',
        '&:hover': {
            backgroundColor: '#EABA00',
        },
        marginTop: 18,
    }
})
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

        this.props.dispatch(dispatch_saveQuestionAnswerAction(authedUser, qid, answer))
            .then(() => this.setState({ submited: true }))

    }



    render() {
        const { classes, question, authorName, avatarURL } = this.props;
        const { submited } = this.state

        return (
            <Panel headerType={`${authorName} ${(!submited) ? 'asks' : 'asked'}`} >
                <WhiteCard>
                    <QuestionBoard avatarURL={avatarURL} authorName={authorName}>
                        {
                            (!submited)
                                ? <div style={{
                                    flex: 5, justifyContent: 'center',
                                    alignItems: 'center', textAlign: 'center',
                                }}>
                                    <Typography variant="h4" component="h3" style={{
                                        textAlign: 'left', padding: 20
                                    }}>
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

QuestionAttempting = withStyles(styles)(QuestionAttempting);


const mapStateToProps = (state, ownProps) => {
    const { qid } = ownProps.match.params
    return {
        question: state.questions[qid],
        authorName: state.users[state.questions[qid].author].name,
        authedUser: state.authedUser,
        alreadyAnswered: state.users[state.authedUser].answers.hasOwnProperty(qid),
        avatarURL: state.users[state.questions[qid].author].avatarURL,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionAttempting))