import React from "react";

class Header extends React.Component {
    render (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Title extends React.Component {
    render (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Content extends React.Component {
    render (){
        return (
            <div>
                {/* //style ထည့်ရင် {}နှစ်ခုထည့် */}
              <Header>
                <h1 style={{ background:"black", color:"white", padding: 20 }}> 
                    Hello React
                </h1>
              </Header> 

              <Title>
                <p>
                    This is my react project.
                </p>
              </Title> 
            </div>
        )
    }
}

export default Content;