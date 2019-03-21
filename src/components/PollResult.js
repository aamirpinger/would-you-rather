import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PollBar from './PollBar'

const styles = theme => ({})

class PollResult extends Component {

    render() {
        const { question } = this.props;
        return (
            <div style={{
                flex: 6, justifyContent: 'center',
                alignItems: 'center', textAlign: 'center',

            }}>
                <div style={{ background: "#EABA00", padding: 10, }}>
                    <Typography variant="h4" component="h3" >
                        Results:
                    </Typography>
                </div>
                <PollBar option={question.optionOne} />
                <PollBar option={question.optionTwo} />

            </div>
        );
    }
}

export default withStyles(styles)(PollResult);