import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60); //define quantidade de minutos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); //arredonda o valor para baixo, calcula o tempo
    const secunds = time % 60; //resulta no resto da divisão exibindo os segundos

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    //torna os minutos em string,se não houver 2 casas inserir zero,separa os minutos em array (esquerdo e direito)
    const [secundLeft, secundRight] = String(secunds).padStart(2,'0').split('');
    //torna os segundos em string,se não houver 2 casas inserir zero,separa os segundos em array (esquerdo e direito)

    function StartCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>Ciclo Encerrado</button>
            ) : (
                <div>
                {isActive ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar Ciclo
                    </button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={StartCountdown}>
                        Iniciar um ciclo
                    </button>
                )}
                </div>
            )}
        </div>
    )
}
