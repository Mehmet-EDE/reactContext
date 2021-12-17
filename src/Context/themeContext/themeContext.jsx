import { createContext, useState,useEffect } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState(localStorage.getItem("Tema") ||'Dark')
    useEffect(() => {
        localStorage.setItem("Tema",theme)
    }, [theme])
    const values={
        theme, setTheme
    }
    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext
