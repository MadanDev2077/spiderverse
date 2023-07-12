import React from 'react'

const NavBar = ({classes}) => {
    return (
        <ul className={`${classes}`}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">FAQ</a></li>
        </ul>
    )
}

export default NavBar