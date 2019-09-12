import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    todo: []
  }

  todoList = (newTodo) => {
    if(this.state.todo.includes(newTodo)){
      alert('Duplicate value')
    }
    else{
      this.setState({
        todo: [...this.state.todo, newTodo]
      })
    }
  }

  deleteNinja = (deleteItem) => {
    let filteredList = this.state.todo.filter((item) => item !== deleteItem);
    this.setState({
      todo: filteredList
    })
  }

  render() {
    return (
      <div className="wrapper">
          <List listDetails={this.state.todo} delete={this.deleteNinja}/>
          <h3>Todo List</h3>
          <Form todo={this.todoList}/>
      </div>
    )
  } 
}

export default App;
