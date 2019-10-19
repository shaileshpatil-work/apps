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
        const isItemPresent = state.addedCart.find(cartItem => action.addItem.id == cartItem.id);        
        if (isItemPresent) {            
            return state;
        }
        else {
            return {
                ...state,
                addedCart: [...state.addedCart, action.addItem]
            }
        }
    }
    else if (action.type === "REMOVE_ITEM") {
        const filterArr = state.addedCart.filter(itm => itm.id !=action.id);        
        return {
            ...state,
            addedCart: filterArr
        }
    }
    return state;
}

export default reducer;

