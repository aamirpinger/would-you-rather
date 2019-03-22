const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        textAlign: 'left',
        padding: 0,

    },
    gridList: {
        textAlign: 'left',
        border: '5px solid black',
    },
    h1: {
        margin: '15px 15px 15px 5px',
    },
    divider: {
        backgroundColor: "#EABA00"
    },
    body: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    answered: {
        textAlign: 'left',
        display: 'flex',
        marginTop: 15,
        marginLeft: 8
    },
    questionAsked: {
        textAlign: 'left',
        display: 'flex',
        marginBottom: 15
    }
})

export default styles