import styled from "styled-components";

export const Overlay = styled.div`
    background: rgba(242, 243, 245, .8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerElement = styled.div`
    background: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 8px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
`

export const ContainerHeader = styled.header`
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg')no-repeat center;
    background-size: contain;
`

export const ContainerStrong = styled.strong`
    font-size: 2.25rem;
    color: var(--title);
`

export const ContainerParagraph = styled.p`
    font-size: 1.25rem;
    color: var(--text);
    margin-top: .25rem;
`

export const ContainerButton = styled.button`
    position: absolute;
    right: .5rem;
    top: .5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
`

export const CloseModal = styled.img``