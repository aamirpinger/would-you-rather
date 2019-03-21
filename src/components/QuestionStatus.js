import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Panel from './Panel'
import WhiteCard from './WhiteCard'
import QuestionBoard from './QuestionBoard'
import { connect } from 'react-redux';

const styles = theme => ({
    answers: {
        marginLeft: 10,
        display: 'flex',
    },
    heading: {
        paddingTop: 30,
        textAlign: 'left',
    },
    answerLabels: {
        fontSize: 18,
    },
    radio: {
        color: '#EABA00',
        padding: 20,
        '&$checked': {
            color: '#EABA00',
        }
    },
    checked: {},
    button: {
        border: "0.1em solid #EABA00",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: '#EABA00',
        },
        marginTop: 18,
        width: '100%'
    }
})
class QuestionStatus extends Component {

    render() {
        const { classes, questions, users, type } = this.props;
        return (
            <div>
                {
                    (questions.length === 0) && <h1>Nothing to display</h1>
                }
                {questions.map((question) =>
                    <Panel headerType={`${users[question.author].name} ${(type === 'answered') ? 'asked' : 'asks'}:`} key={question.id}>
                        <WhiteCard>
                            <QuestionBoard avatarURL={users[question.author].avatarURL} authorName={users[question.author].name}>
                                <div
                                    style={{
                                        flex: 5, justifyContent: 'space-between',
                                        alignItems: 'left', flexDirection: 'column', display: 'flex',
                                        padding: 8, minHeight: 'inherit',
                                    }}>
                                    <Typography variant="h4" component="h3" className={classes.heading} >
                                        Would you rather...
                                         </Typography>
                                    <Divider />
                                    <Typography variant="h6" component="p" className={classes.answers}>
                                        ...{question.optionOne.text.slice(0, 8)}...
                                        </Typography>
                                    <Link to={`/questions/${question.id}`}>
                                        <Button variant="contained" className={classes.button}>
                                            View Poll
                                            </Button>
                                    </Link>
                                </div>
                            </QuestionBoard>
                        </WhiteCard>
                    </Panel>
                )
                }
            </div>
        );
    }
}

QuestionStatus = withStyles(styles)(QuestionStatus)

const mapStateToProps = (state) => ({
    users: state.users,
})

export default connect(mapStateToProps)(QuestionStatus)