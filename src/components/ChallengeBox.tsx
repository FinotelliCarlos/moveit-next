import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxCountainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Suba de Level completando desafios.
                </p>
            </div>
        </div>
    )
}
