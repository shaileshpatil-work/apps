import React from "react";
import { connect } from 'react-redux'


class Cart extends React.Component {
	state = {
		orders: []
	}
	
	componentDidUpdate() {
		const { orders } = this.state;
		const { cartDetails } = this.props;

		cartDetails.map((item) => {
			const selectedItem = orders.find((orderItem) => orderItem.id == item.id);
			if(!selectedItem) {
				this.setState({
					orders: [...this.state.orders, { id: item.id, orderCount: 1 }]
				});				
			}
		});
	}

	increment = (item) => {		
		const { id } = item;
		const { orders } = this.state;
		
		const selectedItem = orders.find((orderItem) => orderItem.id === id);
		if(selectedItem) {
			const upadatedOrders = orders.map((orderItem) => {
				if (orderItem.id === id) {
					orderItem.orderCount++;
				}
				return orderItem;
			});			
			this.setState({
				orders: upadatedOrders,
			});
		} 
	}

	decrement = (item) => {
		const { id } = item;
		const { orders } = this.state;
		
		const selectedItem = orders.find((orderItem) => orderItem.id === id);
		if(selectedItem) {
			const upadatedOrders = orders.map((orderItem) => {
				if (orderItem.id === id) {
					orderItem.orderCount--;	
					if (orderItem.orderCount == 0) {
						this.props.removeItm(orderItem.id)
					}				
				}
				return orderItem;
			});			
			this.setState({
				orders: upadatedOrders,
			});
		} 
	}
	
	render() {
		let a = this.state.orders.map(item => {
			return item.orderCount * this.props.cartDetails.find(cartItm => item.id === cartItm.id)['price'];
		});
		let totalPrice = 0;
		if (a.length) {
			totalPrice = a.reduce((total, num) => total + num);
		}
		return (
			<div>			
			<ol>
				{this.props.cartDetails.map((item, index) => {
					return (
						<li key={index} className="mb-3">
							<div className="row">
								<span className="col-md-6">
									{item.name}
								</span>
								<div>
									<button className="btn pt-0 pb-0" onClick={() => this.increment(item)}>+</button>
									<span>
									{										
										this.state.orders.map(orderItem => {
											if(orderItem.id === item.id) {
												return orderItem.orderCount;
											}
											return '';
										})
									}							
									</span>
									<button className="btn pt-0 pb-0" onClick={() => this.decrement(item)}>-</button>
									<span className="border p-2">
										{
											this.state.orders.map(orderItem => {
												if (orderItem.id === item.id) {
													return orderItem.orderCount*item.price;
												}
												return '';
											})
										}
									</span>					
								</div>
							</div>
						</li>
					)
				})}
			</ol>
			<div>
			{totalPrice}				
			</div>
			</div>
			
		)
	}
}


const mapStateToProps = (state) => {
	return {
		cartDetails: state.addedCart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeItm: (id) => dispatch({ type: "REMOVE_ITEM", id })
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);