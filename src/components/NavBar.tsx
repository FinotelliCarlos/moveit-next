import React from 'react'
import { FiHome } from "react-icons/fi";
import { NavBarContainer, NavLogo } from '../styles/components/NavBar.components'

export function NavBar() {
    return (
        <NavBarContainer>
            <NavLogo src="/favicon.svg" alt="Logo Time-xp"/>
            <FiHome size={40}/>
        </NavBarContainer>
    )
}
