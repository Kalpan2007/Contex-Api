import React,{useContext} from "react";
import UserContex from '../Contex/UserContax'

function Profile(){
    const{user} = useContext(UserContex)
    if(!user) return <div>login first </div>
    return <div>Welcome {user.username}</div>
}

export default Profile;