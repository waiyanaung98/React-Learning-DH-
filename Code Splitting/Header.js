import React from "react";

class Header extends React.Component {  //file name နဲ့ class name နဲ့တူတူပေးတာပိုကောင်းတယ်
    render (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Header;