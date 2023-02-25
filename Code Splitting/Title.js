import React from "react";

class Title extends React.Component {
    render (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Title;