export const getValues = state => {
    return state.reducerAddCard
}

export const getListItem = state => {
    return state.reducerAddCard.list
}

export const saveLocalStorage = state => {
    console.log(state)
    return state.reducerAddCard.list
}