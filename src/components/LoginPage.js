import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
// import { withRouter } from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 400,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: "#EABA00",
    },
    media: {
        width: 250,
        paddingTop: '56.25%', // 16:9
        display: 'flex'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: 200,
    },
    centerScreen: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        backgroundColor: "#f1f1c0"
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    cssLabel: {
        '&$cssFocused': {
            color: 'black',
        },
    },
    cssFocused: {},
    underline: {
        '&:after': {
            borderBottom: '2px solid black',

        },
    },
    detailTitle: {
        textDecoration: 'underline'
    }

})

class LoginPage extends React.Component {

    handleChange = event => {
        this.props.dispatch(dispatch_authedUserAction(event.target.value))
    }

    render() {
        const { classes, users, authedUser } = this.props;
        return (authedUser)
            ? <Redirect to='/' />
            : (<div className={classes.centerScreen} >
                <Card className={classes.card} raised>
                    <CardHeader
                        title="WOULD YOU RATHER?"
                        classes={{ title: classes.header, }}
                    />
                    <CardMedia
                        className={classes.media}
                        image={require("../images/app-logo.png")}
                        title="WOULD YOU RATHER?"
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
                                onChange={this.handleChange}
                                input={<FilledInput name="username" id="username" classes={{
                                    underline: classes.underline,
                                }} />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    Object.values(users).map((user) =>
                                        <MenuItem key={user.id} value={user.id} onChange={this.handleChange}>
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
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

LoginPage = withStyles(styles)(LoginPage);

const mapStateToProps = (state) => ({
    users: state.users,
    authedUser: state.authedUser
})

export default connect(mapStateToProps)(LoginPage)
//export default withRouter(connect(mapStateToProps)(LoginPage))