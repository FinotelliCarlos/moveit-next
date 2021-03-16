import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
`;

export const CountdownElementsFirst = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--countbg);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  border-bottom: 2px solid #000;
  border-radius:5px 5px 0 0;
  font-size: 8.5rem;
  text-align: center;
`;

export const CountdownElementsLast = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--countbg);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  border-bottom: 2px solid #000;
  border-radius:5px 5px 0 0;
  font-size: 8.5rem;
  text-align: center;
`;

export const CountdownSpanFirstPrimary = styled.span`
  border-right: 1px solid #333;
  flex: 1;
  font-size: 6.25rem;
`;

export const CountdownSpanLastPrimary = styled.span`
  border-left: 1px solid #333;
  flex: 1;
  font-size: 6.25rem;
`;

export const CountdownSpanFirstSecond = styled.span`
  border-right: 1px solid #333;
  flex: 1;
  font-size: 6.25rem;
`;

export const CountdownSpanLastSecond = styled.span`
  border-left: 1px solid #333;
  flex: 1;
  font-size: 6.25rem;
`;

export const CountdownDots = styled.span`
    font-size: 6.25rem;
    margin: 0 .5rem;
`

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #333;
  border-radius: 5px;
  background: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  gap: 0.5rem;

  &:hover {
    background: var(--blue-dark);
  }
`;

export const CountdownButtonImageClose = styled.img`
  width: 1.9rem;
`;
export const CountdownButtonImageFinished = styled.img`
  width: 1.9rem;
`;
export const CountdownButtonImageStart = styled.img`
  width: 1.9rem;
`;

export const CountdownButtonActive = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #333;
    border-radius: 5px;
    background: var(--if-btn);
    color: var(--title);
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color .2s;
    gap: .5rem;

    &:hover{
    background: var(--if-hover);
    color: var(--white);
    }
`

export const CountdownButtonFinished = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--green);
    border-radius: 5px;
    background: var(--if-success);
    color: #333;
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color .2s;
    gap: .5rem;
    cursor: not-allowed;
`