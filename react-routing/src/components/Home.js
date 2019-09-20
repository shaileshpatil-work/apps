import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <h1>This is home Component</h1>
                <ul>
                 {this.props.posts.map((item)=>
                     <li>{item.name}</li>
                 )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);