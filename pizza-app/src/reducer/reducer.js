const initialState = {
    data: [],
    addedCart: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "GET_DATA") {
        return {
            ...state,
            data: action.data
        }
    }
    else if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            addedCart: [...state.addedCart, action.addItem]
        }
    }
    return state;
}

export default reducer;

