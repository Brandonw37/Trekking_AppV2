const initialState ={
    loginResults: false
}

export default function isloggedReducer(state= initialState, action) {
    switch(action.type){
        case 'INPUT':
        return {
            ...state,
            loginResults: action.payload
        }
        default:
            return state;
}}
