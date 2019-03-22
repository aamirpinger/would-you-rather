import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import QuestionAnswer from '@material-ui/icons/QuestionAnswerOutlined';
import TrendingUpSharp from '@material-ui/icons/TrendingUpSharp';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Avatar from './Avatar';
import { dispatch_userLoggedOutAction } from '../actions/actionDispatchers'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        // display: 'flex',
        backgroundColor: "#f1f1c0",
        minHeight: '-webkit-fill-available',
        flex: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#EABA00",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        //flexGrow: 1,
        //flexShrink: 5,
        padding: theme.spacing.unit * 3,
        marginTop: 65,
        justifyContent: 'center',
        display: 'grid',
        overflowY: 'overlay',
    },
    grow: {
        flexGrow: 1,
    },
    username: {
        marginRight: 20,
    }
});

class Dashboard extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    logout = () => { this.props.dispatch(dispatch_userLoggedOutAction()) }



    render() {
        const { classes, theme, authedUser, username, avatarURL, children } = this.props;

        return (!authedUser)
            ? <Redirect to="/login" />
            : (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: this.state.open,
                        })}
                    >
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                // color="black"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, {
                                    [classes.hide]: this.state.open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* <div style={{ width: 'inherit', display: 'flex', justifyContent: 'space-between' }}> */}

                            <Typography
                                variant="h6"
                                className={classes.grow}
                                width="content"
                                noWrap>
                                Would you rather?
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Avatar width={65} height={65} avatarURL={avatarURL} authorName={username} />
                            </div>
                            <Typography variant="h6" className={classes.username}>
                                Welcome {username}
                            </Typography>
                            {/* </div> */}
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })}
                        classes={{
                            paper: classNames({
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar} style={{ backgroundColor: "#EABA00", }}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <Link to="/" >
                            <ListItem button key="Home" >
                                <ListItemIcon><HomeOutlined /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>
                        <Link to="/add" >
                            <ListItem button key="NewQuestion">
                                <ListItemIcon><QuestionAnswer /></ListItemIcon>
                                <ListItemText primary="New Question" />
                            </ListItem>
                        </Link>
                        <Link to='/leaderboard' >
                            <ListItem button key="LeaderBoard">
                                <ListItemIcon><TrendingUpSharp /></ListItemIcon>
                                <ListItemText primary="Leader Board" />
                            </ListItem>
                        </Link>
                        <ListItem button key="Logout" onClick={this.logout}>
                            <ListItemIcon><ExitToApp /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                        </List>
                    <Divider style={{ marginTop: 30, marginBottom: 30 }} />

                    </Drawer>
                <div className={classes.content}>
                    {children}
                </div>
                </div >
            );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

Dashboard = withStyles(styles, { withTheme: true })(Dashboard);

const mapStateToProps = (state, ownProps) => {
    return ({
        authedUser: state.authedUser,
        username: (state.authedUser) ? state.users[state.authedUser].name : false,
        avatarURL: (state.authedUser) ? state.users[state.authedUser].avatarURL : '',
    })
}
export default connect(mapStateToProps)(Dashboard);
//export default withRouter(connect(mapStateToProps)(Dashboard));