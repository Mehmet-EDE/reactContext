import {useState} from 'react'
import {useTheme} from '../../Context/themeContext/themeContext'

export default function Header() {
    const {theme,setTheme} =useTheme()
    return (
        <div>
            Active Theme: {theme}
        </div>
    )
}
