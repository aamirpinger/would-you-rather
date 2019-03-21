const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.time('Time to complete transaction')
    console.log('App current state: ', store.getState())
    console.log('Action dispatched: ', action)
    const response = next(action)
    console.log('App updated state: ', store.getState())
    console.timeEnd('Time to complete transaction')
    console.groupEnd()
    return response
}

export default logger