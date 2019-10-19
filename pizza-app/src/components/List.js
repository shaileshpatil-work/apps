import React, { Component } from 'react';
import { connect } from 'react-redux'

class List extends Component {
	addToCart = (item) => {
		this.props.adddData(item)
	}

	render() {
		return (
			<div className="row">
				{this.props.info.map((item) => {
					if (item.category == this.props.cat) {
						return (
							<div className="col-md-6" key={item.name}>
								<div className="border p-2 mb-3">
									<div className="pizza-image">
										<img src={item.pic} className="img-fluid" />
									</div>
									<div className="pizza-details">
										<h4>{item.name}</h4>
										<p className="mb-0">{item.price}</p>
										<button className="btn btn-primary w-100 add-btn" onClick={() => this.addToCart(item)}>Add</button>
									</div>
								</div>
							</div>
						)
					}
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		info: state.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		adddData: (addItem) => dispatch({ type: "ADD_TO_CART", addItem })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);