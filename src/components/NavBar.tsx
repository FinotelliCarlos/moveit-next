import React from 'react'
import { NavBarContainer, NavHome, NavLogo } from '../styles/components/NavBar.components'

export function NavBar() {
    return (
        <NavBarContainer>
            <NavLogo src="/favicon.svg" alt="Logo Time-xp"/>
            <NavHome size={35}/>
        </NavBarContainer>
    )
}
