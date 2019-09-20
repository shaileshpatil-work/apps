const initialState = {
    posts: [
        {id: 1, name:'John', sname: 'Rao'},
        {id: 2, name: 'James', sname: 'Bond'},
    ]
}

const rootReducer = (state = initialState, action) => {
   return state;
}

export default rootReducer;