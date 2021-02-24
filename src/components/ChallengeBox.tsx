import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;
    
    return (
        <div className={styles.challengeBoxCountainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 10 agachamentos a cada 1 minuto por 5 minutos.</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedbutton}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededbutton}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Suba de Level completando desafios.
                    </p>
                </div>
            )}

        </div>
    )
}
