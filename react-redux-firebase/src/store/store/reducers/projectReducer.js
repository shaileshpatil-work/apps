const initState = {
    projects: [
        {id: 1, title: 'help me find peach', content: 'bla bla bla'},
        { id: 2, title: 'help me find peach 2', content: 'bla bla bla 2' },
        { id: 3, title: 'help me find peach 3', content: 'bla bla bla 3' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CREATE_PROJECT', action.project);        
            break;
    
        default:
            return state;            
    }
}

export default projectReducer;