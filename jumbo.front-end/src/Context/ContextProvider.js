import Context from "./Contex"
import { useState } from "react"


function ContextProvider({ children }) {
    // use State
    const [user, setUser] = useState("Richard")

    const state = {
        user,
        setUser
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider