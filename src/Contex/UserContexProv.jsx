import React, { Children } from "react";
import Usercontex from "./UserContax";


const UserContaxProvider = () => {
    const [user, setUser] = React.useState(null); 
    return (
        <>
            <Usercontex.Provider value={{user,setUser}}>
                {Children}
            </Usercontex.Provider>
        </>
    )

}


export default UserContaxProvider;