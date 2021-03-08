import { useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownContext';
import {
    CountdownButton,
    CountdownButtonActive,
    CountdownButtonFinished,
    CountdownContainer,
    CountdownElementsFirst,
    CountdownElementsLast,
    CountdownSpanFirstPrimary,
    CountdownSpanFirstSecond,
    CountdownSpanLastPrimary,
    CountdownSpanLastSecond,
    CountdownButtonImageFinished,
    CountdownButtonImageClose,
    CountdownButtonImageStart,
    CountdownDots
} from '../styles/components/Countdown.components';

export function Countdown() {
    const { minutes, secunds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    //torna os minutos em string,se não houver 2 casas inserir zero,separa os minutos em array (esquerdo e direito)
    const [secundLeft, secundRight] = String(secunds).padStart(2,'0').split('');
    //torna os segundos em string,se não houver 2 casas inserir zero,separa os segundos em array (esquerdo e direito)

    return (
        <>
            <CountdownContainer>
                <CountdownElementsFirst>
                    <CountdownSpanFirstPrimary>
                        {minuteLeft}
                    </CountdownSpanFirstPrimary>
                    <CountdownSpanLastPrimary>
                        {minuteRight}
                    </CountdownSpanLastPrimary>
                </CountdownElementsFirst>
                <CountdownDots>:</CountdownDots>
                <CountdownElementsLast>
                    <CountdownSpanFirstSecond>
                        {secundLeft}
                    </CountdownSpanFirstSecond>
                    <CountdownSpanLastSecond>
                        {secundRight}
                    </CountdownSpanLastSecond>
                </CountdownElementsLast>
            </CountdownContainer>

            {hasFinished ? (
                <CountdownButtonFinished disabled>
                    Ciclo Encerrado
                    <CountdownButtonImageFinished 
                    src="icons/checked.png" 
                    alt="Checked"/>
                </CountdownButtonFinished>
            ) : (
                <>
                {isActive ? (
                    <CountdownButtonActive 
                    type="button" 
                    onClick={resetCountdown}>
                        Abandonar Ciclo 
                        <CountdownButtonImageClose 
                        src="icons/closecount.svg" 
                        alt="Close"/>
                    </CountdownButtonActive>
                ) : (
                    <CountdownButton 
                    type="button" 
                    onClick={startCountdown}>
                        Iniciar um ciclo 
                        <CountdownButtonImageStart 
                        src="icons/play.svg" 
                        alt="Play"/>
                    </CountdownButton>
                )}
                </>
            )}
        </>
    )
}
