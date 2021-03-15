import styled from 'styled-components'

export const NavBarContainer = styled.div`
@media screen and (min-width: 1115px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: absolute;
    height: 100vh;
    width: 5rem;
    padding: 1rem;
    top: 0;
    left: 0;

    background: var(--cardbg);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
}
`
export const NavLogo = styled.img`
@media screen and (max-width: 1115px){
    display: none;
}
`