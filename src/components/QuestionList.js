import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import QuestionStatus from './QuestionStatus'
import { connect } from 'react-redux';

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: 600,
        //minHeight: 270,
        // minHeight: '90vh',
        // height: '100hv',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '1px solid #EABA00'
    },
    underline: {
        backgroundColor: 'black',
    },
    tabColor: {
        backgroundColor: '#EABA00',
        color: 'black'
    },
});

class QuestionList extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, unAnsweredQuestion, answeredQuestion, } = this.props;
        const { value } = this.state;
        return (
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs classes={{ indicator: classes.underline, root: classes.tabColor }} variant="fullWidth" value={value} onChange={this.handleChange}>
                            <LinkTab label="Unanswered Question" href="UnansweredQuestion" />
                            <LinkTab label="Answered Question" href="AnsweredQuestion" />
                        </Tabs>
                    </AppBar>

                    {value === 0 && <QuestionStatus questions={unAnsweredQuestion} type="unAnswered" />}
                    {value === 1 && <QuestionStatus questions={answeredQuestion} type="answered" />}
                </div>
            </NoSsr>
        );
    }
}

QuestionList.propTypes = {
    classes: PropTypes.object.isRequired,
};

QuestionList = withStyles(styles)(QuestionList);

const mapStateToProps = (state) => ({
    // users: state.users,
    // questions: state.questions,
    authedUser: state.authedUser,

    unAnsweredQuestion: Object.values(state.questions).filter(q =>
        !state.users[state.authedUser].answers.hasOwnProperty(q.id)
    ).sort((a, b) => b.timestamp - a.timestamp),

    answeredQuestion: Object.values(state.questions).filter(q =>
        state.users[state.authedUser].answers.hasOwnProperty(q.id)
    ).sort((a, b) => b.timestamp - a.timestamp),
})

export default connect(mapStateToProps)(QuestionList)


