import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import { connect } from 'react-redux';
import { dispatch_authedUserAction, } from '../actions/actionDispatchers'
import { Redirect, } from 'react-router-dom'
import styles from './styles/LoginPage'

function LoginPage(props) {

    const handleChange = event => {
        props.dispatch(dispatch_authedUserAction(event.target.value))
    }
    const { classes, users, authedUser } = props;
    return (authedUser)
        ? <Redirect to='/' />
        : (<div className={classes.centerScreen} >
            <Card className={classes.card} raised>
                <CardHeader
                    title="WOULD YOU RATHER?"
                    classes={{ title: classes.header, }}
                />
                <img
                    src={require("../images/app-logo.png")}
                    className={classes.media}
                    alt="Would you rather logo"
                />

                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2" className={classes.detailTitle}>
                        Sing in
                        </Typography>
                    <FormControl variant="filled" className={classes.actions} component="div">
                        <InputLabel htmlFor="username" FormLabelClasses={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}>User Name</InputLabel>

                        <Select
                            value={authedUser}
                            onChange={handleChange}
                            input={<FilledInput name="username" id="username" classes={{
                                underline: classes.underline,
                            }} />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                Object.values(users).map((user) =>
                                    <MenuItem key={user.id} value={user.id} onChange={handleChange}>
                                        {user.name}
                                    </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </div >
        )
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    users: state.users,
    authedUser: state.authedUser
})

export default connect(mapStateToProps)(withStyles(styles)(LoginPage))