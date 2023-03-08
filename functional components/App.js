import React from "react";
import Users from "./users";


const App = (props) =>{
  return (
    <ul>
      <Users name='aungaung' age='22' > </Users> 
      {/* //ဒီname and age က props ကိုဖြတ်ပြီး ဟိုဘက်မှာသွားပေါ်တာ */}
      <Users name='maung maung' age='24' > </Users>
    </ul>
  )
}

export default App;








