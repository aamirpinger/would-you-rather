import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { dispatch_saveQuestionAction } from '../actions/actionDispatchers'
import styles from './styles/NewQuestion'

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        submited: false
    }

    handleChangeOne = (e) => this.setState({ optionOneText: e.target.value })
    handleChangeTwo = (e) => this.setState({ optionTwoText: e.target.value })


    handleSubmit = () => {
        const { author, } = this.props
        let { optionOneText, optionTwoText } = this.state

        optionOneText = optionOneText.trim()
        optionTwoText = optionTwoText.trim()

        if (optionOneText && optionTwoText) {
            if (optionOneText !== optionTwoText) {
                this.props.dispatch(dispatch_saveQuestionAction({ optionOneText, optionTwoText, author }))
                    .then(() => this.setState({ submited: true }))
            }
            else {
                alert("Option One and Option Two cannot be same")
            }
        } else {
            alert("Option One or Option Two cannot be submited empty")
        }

    }


    render() {
        const { classes, } = this.props
        const { submited } = this.state

        return (submited)
            ? <Redirect to='/' />
            : (
                <div className={classes.centerScreen}>

                    <div style={{ background: "#EABA00", }}>
                        <Typography variant="h6" component="h5" className={classes.header}>
                            Complete the question
                        </Typography>
                    </div>
                    <Typography variant="h5" component="h5" className={classes.subHead}>
                        Would you rather ...
                    </Typography>

                    <FormControl className={classes.margin}>
                        <InputLabel
                            htmlFor="custom-css-standard-input"
                            classes={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                        >
                            Option One
                        </InputLabel>
                        <Input
                            id="custom-css-standard-input"
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                            onChange={this.handleChangeOne}
                            value={this.state.optionOne}
                        />
                    </FormControl>
                    <Typography variant="h5" component="h5" className={classes.textField} >
                        --------  OR --------
                    </Typography>
                    <FormControl className={classes.margin} >
                        <InputLabel
                            htmlFor="optionOne-input"
                            classes={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                        >
                            Option Two
                         </InputLabel>
                        <Input
                            id="optionTwo-input"
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                            onChange={this.handleChangeTwo}
                            value={this.state.optionTwo}
                        />
                    </FormControl>
                    <Button variant="contained" className={classes.button} onClick={this.handleSubmit}>
                        Submit
                     </Button>
                </div>
            )
    }
}

NewQuestion = withStyles(styles)(NewQuestion);


const mapStateToProps = (state) => {

    return {
        author: state.authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))