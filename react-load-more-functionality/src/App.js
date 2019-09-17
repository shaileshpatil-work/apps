import React, {Component} from 'react';
import './App.css';


class App extends Component {
    state = {
      posts: [],
      counter: 10
    }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json
        })
      })
  }

  loadMore = () => {
    this.setState({
      counter: this.state.counter + 10
    })
  }

  render() {
    return (
      <div>
        <ul className="wrapper">
           {this.state.posts.slice(0,this.state.counter).map((item) => 
            <li key={item.id}>
               <h1>{item.id}</h1>
               <p>{item.title}</p>
               <p>{item.body}</p>
            </li>
           )}
        </ul>
        <button onClick={this.loadMore}>Load More</button>
      </div>
    )
  } 
}

export default App;
