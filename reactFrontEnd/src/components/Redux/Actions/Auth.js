export const action = (payload) => {
    return {
        type: 'INPUT',
        payload: payload
    }
}

export const isAuthAction = (payload) => {
    return{
        type: 'isAuth',
        payload: payload
    }
}