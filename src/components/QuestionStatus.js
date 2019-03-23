import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Panel from './Panel'
import WhiteCard from './WhiteCard'
import QuestionBoard from './QuestionBoard'
import { connect } from 'react-redux';
import styles from './styles/QuestionStatus'
import PropTypes from 'prop-types';

function QuestionStatus(props) {

    const { classes, questions, users, type } = props;
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


QuestionStatus.propTypes = {
    classes: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    users: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    users: state.users,
})

export default connect(mapStateToProps)(withStyles(styles)(QuestionStatus))