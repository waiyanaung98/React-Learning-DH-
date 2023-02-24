import React from "react";

class Title extends React.Component {
    render (){
        return (
            <div>
               <h1>  {this.props.name} </h1>
           </div> 
        )
    }
}

class Header extends React.Component {
    render (){
        return (
            <div>
                 <Title name = {this.props.user}/>
           </div> 
        )
    }
}

class Data extends React.Component {
    render (){
        return (
           <div>
                 <Header user ="Google " />
           </div> 
        )
    }
}
export default Data;