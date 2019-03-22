const styles = theme => ({
    centerScreen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'inherit',
    },
    textField: {
        flex: 2,
        display: 'flex',
        marginTop: 2,
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#EABA00",
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
        marginLeft: 15,
        marginBottom: 25,
    },
    button: {
        border: "0.1em solid #EABA00",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: '#EABA00',
        },
        marginTop: 18,
    },
    header: {
        flex: 2,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        margin: 20,
    },
    subHead: {
        flex: 2,
        textAlign: 'left',
        margin: 10,
        marginLeft: 20
    }
})

export default styles