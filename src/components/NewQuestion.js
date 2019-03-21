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
const styles = theme => ({
    // root: {
    //     // ...theme.mixins.gutters(),
    //     // paddingTop: theme.spacing.unit * 2,
    //     // paddingBottom: theme.spacing.unit * 2,
    //     display: 'flex',
    //     width: 600,
    //     minHeight: 270,
    //     // justifyContent: 'center',
    //     alignItems: 'center',
    //     // textAlign: 'center',
    // },
    centerScreen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
        // minHeight: '93vh',
        //backgroundColor: "#f1f1c0",
        minHeight: 'inherit',
        // paddingTop: 80,
    },
    textField: {
        //width: '80%',
        flex: 2,
        display: 'flex',
        //marginLeft: 15,
        //border: '2px solid black',
        marginTop: 2,
        marginBottom: 2,
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: "#EABA00",
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
            borderColor: "#EABA00",
        }
    },
    disabled: {},
    focused: {},
    error: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: "#EABA00",
        },
    },
    notchedOutline: {},
    cssLabel: {
        '&$cssFocused': {
            color: "#EABA00",
        },
    },
    cssFocused: {},
    margin: {
        // margin: theme.spacing.unit,
        marginLeft: 15,
    },
    button: {
        border: "0.1em solid #EABA00",
        backgroundColor: "white",
        //width: 180,
        '&:hover': {
            backgroundColor: '#EABA00',
        },
        marginTop: 18,
    },
})

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
        const { optionOneText, optionTwoText } = this.state
        this.props.dispatch(dispatch_saveQuestionAction({ optionOneText, optionTwoText, author }))
            .then(() => this.setState({ submited: true }))

    }


    render() {
        const { classes, } = this.props
        const { submited } = this.state



        return (submited)
            ? <Redirect to='/' />
            : (
                <div className={classes.centerScreen}>

                    <div style={{ background: "#EABA00", }}>
                        <Typography variant="h6" component="h5" style={{ flex: 2, display: 'flex', justifyContent: 'left', alignItems: 'center', margin: 20, }}>
                            Complete the question
            </Typography>
                    </div>
                    <Typography variant="h5" component="h5" style={{ flex: 2, textAlign: 'left', margin: 10, marginLeft: 20 }}>
                        Would you rather ...
            </Typography>

                    <FormControl className={classes.margin} style={{ marginBottom: 25, }}>
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
                    <Typography variant="h5" component="h5" className={classes.textField} style={{ justifyContent: 'center', color: "#EABA00", alignItems: 'center', }}>
                        --------  OR --------
            </Typography>
                    <FormControl className={classes.margin} style={{ marginBottom: 25, }}>
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