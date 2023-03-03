import React from "react"


class CSSinJS extends React.Component {

 
  render (){

    //external CSS
    const styles = {
      bb:{
        backgroundColor : 'black',
        color : 'white'
      },
      cc: {
        border : '2px solid #00ff2e'
      }
    }

    return (
     <div style={styles.bb}>
        <h1 style={styles.cc}> Hello Digital </h1>
     </div>
    )
  }
}

export default CSSinJS;







