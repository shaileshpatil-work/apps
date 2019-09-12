import React, { Component } from 'react'
import TextField from './Textfield';
import SubmitBtn from './SubmitBtn';

class Form extends Component {
    collectTodo = (e) => {
        e.preventDefault();
        this.props.todo(e.target.children[0].children[0].value);
    }
    render() {
        return(
            <form onSubmit={this.collectTodo}>
                <TextField placeholderVal={"Enter todo"}/>
                <SubmitBtn />
            </form>
        )
    }
}

export default Form;