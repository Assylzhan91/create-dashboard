import {
    ADD_A_CARD,
    INPUT_CHANGE,
    TEXT_AREA_CHANGE
} from "./actionTypes"



export function  addCard(value, text){
    return {
        type: ADD_A_CARD,
        value,
        text
    }
}


export function  inputChange(value){
    return {
        type: INPUT_CHANGE,
        payload: value,
        isValid: value.length >= 4 && !!value.length
    }

}

export function  textAreaChange(text){
    return {
        type: TEXT_AREA_CHANGE,
        payload: text
    }

}

