import React from "react";
import "./navbar.css"

class Nav extends React.Component {
    render (){
        return (
            <div className="background">
                {this.props.children}
            </div>
        )
    }
}

export default Nav;