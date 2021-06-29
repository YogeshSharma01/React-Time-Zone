import React, {useState} from 'react';




const App = () =>{
    const state = useState;
    var d = new Date().toLocaleTimeString();
    const [msg,setCount] = useState(d);
    const inc=()=>{
        d = new Date().toLocaleTimeString();
        setCount(d);
        
    };

        return(<>
        <div className="Container">
            <h1>{msg}</h1>
            <button className="btn" onClick={inc}>Click Here</button>
        </div>
        </>)
}


export default App;