import styled from 'styled-components'

export const IndexContainer = styled.div`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;   
`

export const HeadElements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`


export const ContainerProfileCount = styled.div`
    padding: 2rem;
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
`


export const IndexSection = styled.section`
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    
`