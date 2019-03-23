import React from 'react';
import Dashboard from '../components/Dashboard'
import QuestionList from '../components/QuestionList'
import LoginPage from '../components/LoginPage'
import { Route, Switch } from 'react-router-dom'
import QuestionAttempting from '../components/QuestionAttempting'
import NewQuestion from '../components/NewQuestion'
import WhiteCard from '../components/WhiteCard'
import LeaderBoard from '../components/LeaderBoard'
import ErrorPage from '../components/ErrorPage'
import Logout from '../components/Logout'

function Routers() {
    return (
        <Switch>
            <Route exact path="/login" render={() => (
                <LoginPage />)}
            />

            <Route exact path="/" render={() => (
                <Dashboard >
                    <QuestionList />
                </Dashboard>)}
            />

            <Route exact path="/add" render={() => (
                <Dashboard >
                    <WhiteCard>
                        <NewQuestion />
                    </WhiteCard>
                </Dashboard>)}
            />

            <Route exact path="/questions/:qid" render={() => (
                <Dashboard >
                    <QuestionAttempting />
                </Dashboard>)}
            />
            <Route exact path="/leaderboard" render={() => (
                <Dashboard >
                    <LeaderBoard />
                </Dashboard>)}
            />
            <Route exact path="/logout" render={() => (
                <Logout />
            )}
            />

            <Route render={() => <ErrorPage />} />
        </Switch>
    );
}

export default Routers;