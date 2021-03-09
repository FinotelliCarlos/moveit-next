import React, { useContext } from 'react'
import ReactSwitch from 'react-switch';
import { NavContainer, NavLogo } from '../styles/components/NavBar.components';


export function NavBar() {   
    return (
        <>
            <NavContainer>
                <NavLogo src="/logo2.svg" alt="Logo time xp"/>
            </NavContainer>
        </>
    )
}
