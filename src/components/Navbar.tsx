import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { LogoTimeXp, NavbarContainer } from '../styles/components/Navbar.components';

interface Props{
    toggleTheme(): void;
}

export const Navbar: React.FC<Props> = ({toggleTheme}) => {
    const { checktheme, title } = useContext(ThemeContext);

    return (
        <NavbarContainer>
            <LogoTimeXp src="/logo.svg" alt="Logo Time Xp"/>
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
        </NavbarContainer>
    )
}
