import {createContext, useContext, useState } from "react";


const UserContext = createContext();
export const useUser = () => useContext(UserContext);
export const UserProvider = ({children})=>{
    const[username,setUsername] = useState(null);
    return (
        <UserContext.Provider value={{username,setUsername}}>
            {children}
        </UserContext.Provider>
    )
};