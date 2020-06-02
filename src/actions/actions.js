import {
    ADD_A_CARD,
    INPUT_CHANGE,
    TEXT_AREA_CHANGE,
    CLEAR_FIELDS
} from "./actionTypes"

import {COUNT_LIMIT_INPUT} from "../constants/constants"



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
        isValid: value.length >= COUNT_LIMIT_INPUT && !!value.length
    }

}

export function  textAreaChange(text){
    return {
        type: TEXT_AREA_CHANGE,
        payload: text
    }

}

export function  clearFields(value, text){
    return {
        type: CLEAR_FIELDS,
        value,
        text,
    }

}

