import React , {useState,useContext}from "react";
import UserContax from "../Contex/UserContax";

function Login(){

    const[username,setUsername]  = useState("");
    const[pass,setPass]  = useState("");

    const{setUser} = useContext(UserContax)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,pass})
    }
    return(
        <>
         <h2>Login</h2>
         <input type="text"  placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
         <input type="text"  placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
         <button>submit</button>
        
        </>
    )
}

export default Login;