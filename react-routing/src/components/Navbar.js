import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";


 class Navbar extends React.Component {
     render() {
        //  console.log(this.props);
        // If you want to access router properties in other components where props are not available
        // then withRouter is used as higher order component and Component is wrapped in it so that props are accessible in that component.
         setTimeout(() => {
             this.props.history.push('/about')
         }, 2000);
         return(
             <div>
                 <ul className="navbar">
                     <li><NavLink to="/">Home</NavLink></li>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink to="/contact">Contact</NavLink></li>
                 </ul>
             </div>
         )
     }
 }

export default withRouter(Navbar);