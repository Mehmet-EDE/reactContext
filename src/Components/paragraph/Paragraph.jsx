import * as react from 'react'
import {useTheme} from '../../Context/themeContext/themeContext'


export default function Paragraph() {
    const data =useTheme()
    return (
        <div>
            <br />
            <button onClick={()=>data.setTheme(data.theme=='Dark'?'Light': 'Dark')}>Change Theme</button>
        </div>
    )
}
