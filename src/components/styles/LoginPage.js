const styles = theme => ({
    card: {
        maxWidth: 400,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: "#EABA00",
    },
    media: {
        width: 300,
        height: 300
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

export default styles