import styled from 'styled-components'
import { FiHome } from "react-icons/fi";

export const NavBarContainer = styled.div`
@media screen and (min-width: 1115px){
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    position: absolute;
    height: 100vh;
    width: 5rem;
    padding: 0 1rem;
    top: 0;
    bottom: 0;
    left: 0;

    background: var(--cardbg);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
}
`
export const NavLogo = styled.img`
    position: absolute;
    margin-top: 2rem;
    top: 0;
    width: 3rem;

@media screen and (max-width: 1115px){
    display: none;
}
`

export const NavHome = styled(FiHome)`
    color: var(--title);
    
    &:hover{
        color: var(--blue-dark);
        cursor: not-allowed;
    } 
`