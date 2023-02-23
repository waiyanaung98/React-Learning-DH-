import React from "react";

class Item extends React.Component {
    render (){
        return (
            <li>
                {this.props.fruitName},{this.props.fruitPrice}
            </li>
        )
    }
}

class Fruit extends React.Component {

    //input sample
    // nameRef = React.createRed();
    // <input type="text" ref={this.nameRef}/>
    // let name = {this.nameRef.current.value}

    //state
    state = {   //state
        items : [   //json array
            {name : "apple",price : 0.1},
            {name : "banana",price : 2.0},
        ]
    }

    //input
    nameRef = React.createRef();
    priceRef = React.createRef();

 
    //change state
    add = ()=>{
        let id = this.state.items.length + 1;
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;

        this.setState = {
            items:[
                ...this.state.items,
                {id,name ,price}
            ]
        }
    }



    render(){
        return (
            <div>
                <h1>Hello React</h1>

                <input type="text" ref= {this.nameRef}/>
                <input type="password" ref= {this.priceRef}/>

                <button onClick={this.add()}>Click</button>
                <ul>
                   {this.state.items.map(i =>{
                        return (
                            <Item 
                            id={i.id} 
                            fruitName = {i.name} 
                            fruitPrice = {i.price}
                         />
                        )
                   })}
                </ul>
            </div>
        )
    }
}

export default Fruit;