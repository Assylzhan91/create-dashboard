
export const getLastElem = state => {
    const lastItem = state.reducerAddCard.list.slice(-1).pop()
    return lastItem.id
}