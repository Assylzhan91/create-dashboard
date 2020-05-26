import {
    ADD_A_CARD,
    CHANGE_VALUE
} from "./actionTypes"



export function  addCard(text){
    return  dispatch => {
        return dispatch({type: ADD_A_CARD, payload: text})
    }
}


export function  changeInput(value){
    console.log(value)
    return  dispatch => {
        return dispatch({type: CHANGE_VALUE, payload: value})
    }
}