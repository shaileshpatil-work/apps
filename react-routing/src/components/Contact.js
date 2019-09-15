import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Contact Component</h1>
                <Link to='/about'>Go to about page</Link>
            </div>
        )
    }
}

export default Contact;