import React from "react";
import Header from "./Header";
import Title from "./Title";


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