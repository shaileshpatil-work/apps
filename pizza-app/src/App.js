import React from 'react';
import { connect } from 'react-redux'
import List from './components/List';
import Cart from './components/Cart';

class App extends React.Component {
  state = {
    category: 'veg'
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizza-list.json')
    .then(response => response.json())
    .then(json => this.props.list(json))
  }

  showVeg = () => {
    this.setState({
      category: 'veg'
    })
  }

  showNonVeg = () => {
    this.setState({
      category: 'nonveg'
    })
  }

  render(){
    return(
      <div className="container p-5">
          <div className="row">
              <div className="col-md-2">
                  <ul className="list-unstyled">
                    <li>
                        <a href="javascript:void(0)" onClick={this.showVeg}>Veg</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.showNonVeg}>Non-veg</a>
                    </li>
                  </ul>
              </div>
              <div className="col-md-6">
                  <List cat={this.state.category}/>
              </div>
              <div className="col-md-4">
                  <h4>Cart</h4>     
                  <Cart />             
              </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    list: (data) => dispatch({type: 'GET_DATA', data })
  }
}

export default connect(null,mapDispatchToProps)(App);
