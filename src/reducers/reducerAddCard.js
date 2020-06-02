import {
    ADD_A_CARD,
    TEXT_AREA_CHANGE,
    INPUT_CHANGE,
    CLEAR_FIELDS
} from "../actions/actionTypes"

const initialState = {
    list: [
        {
            id: 1,
            heading: 'Heading',
            text: 'Beatae exercitationem laboriosam, minus molestiae nobis provident repudiandae! Aspernatur beatae dolore enim esse iste laborum, magni perspiciatis recusandae veritatis? Accusantium, impedit iure laboriosam, minus molestiae nobis provident repudiandae! Aspernatur beatae dolore enim esse iste laborum, mag?'
        },
        {
            id: 2,
            heading: 'Heading',
            text: 'Beatae laboriosam, minus molestiae nobis provident repudiandae! Aspernatur beatae dolore enim esse iste laborum, mag exercitationem laboriosam, minus molestiae nobis provident repudiandae! Aspernatur beatae dolore enim esse iste laborum, magni perspiciatis recusandae veritatis? Accusantium, impedit iure?'
        }
    ],
    text: '',
    value: '',
    isValid: false
}

export const reducerAddCard = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_A_CARD:
            let lastItem =  state.list.length === 0
                ? 1
                : state.list.slice(-1).pop().id + 1

            return {
               ...state,
                list: [...state.list, { id: lastItem, heading: action.value, text: action.text}],
                text: '',
                value: '',
                isValid: false
            }
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.payload,
                isValid: action.isValid
            }
        case TEXT_AREA_CHANGE:
            return {
                ...state,
                text: action.payload
            }
        case CLEAR_FIELDS:
            return {
                ...state,
                text: '',
                value: '',
                isValid: false
            }
        default:
            return state
    }
}

