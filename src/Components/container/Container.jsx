import { useContext } from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import ThemeContext from '../../Context/themeContext/themeContext'
import '../../App.css'
import Profile from '../profile/Profile'

export default function Container() {
    const {theme}=useContext(ThemeContext)
    console.log(theme);
    return (
        <div className={theme=='Dark' ?'Dark':'Light'}>
            <Header/>
            <hr />
            <Paragraph/>
            <hr />
            <Profile/>
        </div>
    )
}
