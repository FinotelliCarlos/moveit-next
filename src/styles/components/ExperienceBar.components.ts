import styled from "styled-components";

export const ExperienceBarHeader = styled.header`
    display: flex;
    align-items: center;
`

export const ExperienceBarSpanInitial = styled.span`
    font-size: 1rem;
`

export const ExperienceBarPercent = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
`

export const ExperiencePercentCurrent = styled.div`
    height: 4px;
    border-radius: 4px;
    background: var(--green);
`

export const ExperienceBarSpanPercent = styled.span`
    font-size: 1rem;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`
export const ExperienceBarSpanFinish = styled.span`
    font-size: 1rem;
`

