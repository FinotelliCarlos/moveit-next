import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { NavContainer, NavLogo } from '../styles/components/NavChange.components';

interface Props{
    toggleTheme(): void;
}

export  function NavBarContainer({toggleTheme}) {
    const { checktheme, title } = useContext(ThemeContext);
    
    return (
        <>
            <NavContainer>
                <NavLogo src="/logo-full.svg" alt="Logo Moveit"/>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={40}
                    handleDiameter={20}
                    offColor={checktheme.OffCheck}
                    onColor={checktheme.onCheck}
                    />
            </NavContainer>
        </>
    )
}
