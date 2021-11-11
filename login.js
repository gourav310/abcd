import React from "react";


function Login(){
    const apiCall=()=>{
        const url ="http://localhost:9000/home?"+"username=sms&password=a1b2c3d4";
        fetch(url).then((res)=>{
            if (res.ok) {
                    console.log(res.json())
                    return;
                  }
                }).catch((e)=>console.error(e))
    }
    return (<div>
        <input id="user" placeholder="Enter username"></input>
        <input id="pass" placeholder="Enter password"></input>
        <button onClick={apiCall}>Submit </button>
    </div>)
}

export default Login