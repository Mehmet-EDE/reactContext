import {useContext,useState} from 'react'
import ThemeContext from '../../Context/themeContext/themeContext'


export default function Paragraph() {
    const data =useContext(ThemeContext)
    return (
        <div>
            <br />
            <button onClick={()=>data.setTheme(data.theme=='Dark'?'Light': 'Dark')}>Change Theme</button>
        </div>
    )
}
