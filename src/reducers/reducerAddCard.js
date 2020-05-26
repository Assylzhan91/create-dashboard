import {
    ADD_A_CARD,
    CHANGE_VALUE
} from "../actions/actionTypes"
const initialState = {
    list: [
        {
            id: 1,
            heading: "HEADING",
            text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        },

        {
            id: 2,
            heading: "HEADING",
            text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        },

        {   id: 3,
            heading: "HEADING",
            text: "Consectetur adipisicing elit. Ad aliquam amet deleniti dolor dolorem doloremque ducimus eaque fuga fugiat impedit incidunt inventore iste magnam nemo, quod sint, suscipit tempora veniam!",
        },
    ],
    heading: '',
    text: ''
}

export const reducerAddCard = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_A_CARD:
            console.log(state.list)
            return {
               list: [...state.list]
            }
        case CHANGE_VALUE:
            return {
                heading: action.payload
            }
        default:
            return state
    }
}

