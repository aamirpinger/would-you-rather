import React from 'react';
import ScoreCard from './ScoreCard'
import Avatar from './Avatar';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ScoreBadge from './ScoreBadge'
import WhiteCard from './WhiteCard'
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        width: 'inherit',
    },
    gridList: {
        justifyContent: 'space-between',
        minHeight: 'inherit',
        alignItems: 'center',
        width: 'inherit',
        display: 'flex',
        //minWidth: '100%'
        //        border: '1px solid red'
    },
    GridListTile: {
        justifyContent: 'center',
        display: 'flex',
    }
})

function LeaderBoard(props) {
    const { classes, userRanking } = props
    console.log(userRanking, "userRanking")
    return (
        Object.values(userRanking).map((user) => {
            const { id, name, avatarURL, questionAsked, answered } = user
            // const questionAsked = Object.keys(user.questions).length
            // const answered = Object.keys(user.answers).length

            return (
                <WhiteCard key={id}>
                    <GridList cellHeight={160} className={classes.gridList} cols={16} >
                        <GridListTile cols={4.5} className={classes.GridListTile}>
                            <Avatar width={150} height={150} avatarURL={avatarURL} authorName={name} />
                        </GridListTile>
                        <GridListTile cols={1} style={{ minHeight: 'inherit', width: 1, border: '0.05em solid silver', }} />
                        <GridListTile cols={7.5} style={{ minHeight: 'inherit', }} >
                            <ScoreCard name={name} questionAsked={questionAsked} answered={answered} />
                        </GridListTile>
                        <GridListTile cols={1} style={{ minHeight: 'inherit', width: 1, border: '0.05em solid silver', }} className={classes.GridListTile} />
                        <GridListTile cols={3.5}>
                            <ScoreBadge totalScore={questionAsked + answered} width={100} height={150} />
                        </GridListTile>
                    </GridList>
                </WhiteCard>
            )
        })

    )
}

const mapStateToProps = (state) => {
    return ({

        userRanking: Object.values(state.users).map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answered: Object.keys(user.answers).length,
            questionAsked: user.questions.length
        })).sort((a, b) => (b.answered + b.questionAsked) - (a.answered + a.questionAsked))
        // ,
        // unAnsweredQuestion: Object.values(state.users).map(q =>

        //     !state.users[state.authedUser].answers.hasOwnProperty(q.id)
        // ).sort((a, b) => b.timestamp - a.timestamp),


        // users: state.users
    })
}
export default connect(mapStateToProps)(withStyles(styles)(LeaderBoard));