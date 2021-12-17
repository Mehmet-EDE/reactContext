import { createContext, useState, useEffect, useContext } from 'react'

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'M.ede',
        age: 205,
        bio: 'Dead already'
    });
    var values = { user, setUser }
    return <UserContext.Provider value={values} >{children}</UserContext.Provider>
}
export const useUser = () => useContext(UserContext)
