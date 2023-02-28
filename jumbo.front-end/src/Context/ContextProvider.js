import Context from "./Contex"
import { useState } from "react"


function ContextProvider({ children }) {
    // use State
    const [user, setUser] = useState("Richard")
    const [wishL, setWish]= useState([])
    const [ posts, setAllPosts ] = useState([]) // []
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [signPassword, setSignpassword] = useState('')
    const [signUsername, setSignusername] = useState('')
    const [active, setActive] = useState(false)
    


    
    

    const state = {
        user,
        setUser,
        posts,
        setAllPosts,
        wishL, 
        setWish,
        password,
        setPassword,
        username,
        setUsername,
        signPassword,
        setSignpassword,
        signUsername,
        setSignusername, 
        active, 
        setActive

    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider