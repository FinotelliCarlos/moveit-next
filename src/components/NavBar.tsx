import React, { useContext } from 'react'
import { NavContainer, NavLogo } from '../styles/components/NavBar.components';


export function NavBar() {   
    return (
        <>
            <NavContainer>
                <NavLogo src="/logo-full.svg" alt="Logo Moveit"/>
            </NavContainer>
        </>
    )
}
