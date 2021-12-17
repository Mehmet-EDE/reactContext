import { useContext, useState } from 'react'
import UserContext from '../../Context/userContext/UserContext'

export default function Profile() {
    const { user, setUser } = useContext(UserContext)
    console.log(user);
    const handleLogin = () => {
        setTimeout(() => {
            setUser({
                name: 'Mehmet EDE',
                age: 31,
                bio: 'Still Dead'
            })
        }, 1500);
    }
    const handleLogout = () => {
        setTimeout(() => {
            setUser({
                name: 'M.ede',
                age: 205,
                bio: 'Dead already'
            })
        }, 1500);
    }
    return (
        <div>
            <b>Name : {user.name}</b>
            <p>Age : {user.age}</p>
            <h1>Bio : {user.bio}</h1>
            <hr />
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
