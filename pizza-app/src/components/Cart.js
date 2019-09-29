import React from "react";
import { connect } from 'react-redux'


class Cart extends React.Component {
    state = {
        count: 0
    }


    render() {
        console.log(this.props.cartDetails)
        return(
            <ol>
                {this.props.cartDetails.map((item) => {
                    return (
                        <li className="mb-2">
                            <div className="row">
                                <span className="col-md-6">
                                    {item.name}
                                </span>
                                <div>
                                    <button className="btn pt-0 pb-0">+</button>
                                    <span>{this.state.count}</span>
                                    <button className="btn pt-0 pb-0">-</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cartDetails: state.addedCart
    }
}

export default connect(mapStateToProps)(Cart);