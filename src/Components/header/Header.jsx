import {useContext,useState} from 'react'
import ThemeContext from '../../Context/themeContext/themeContext'

export default function Header() {
    const {theme,setTheme} =useContext(ThemeContext)
    return (
        <div>
            Active Theme: {theme}
        </div>
    )
}
