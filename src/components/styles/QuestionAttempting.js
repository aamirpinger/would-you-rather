const styles = theme => ({

    answerLabels: {
        fontSize: 18,
    },
    radio: {
        color: '#EABA00',
        padding: 30,
        '&$checked': {
            color: '#EABA00',
        }
    },
    checked: {},
    button: {
        border: "0.1em solid #EABA00",
        backgroundColor: "white",
        width: '100%',
        '&:hover': {
            backgroundColor: '#EABA00',
        },
        marginTop: 18,
    },
    root: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    heading: {
        textAlign: 'left',
        padding: 20
    }
})

export default styles