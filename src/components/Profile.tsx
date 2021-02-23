import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/finotellicarlos.png" alt="Finotelli"/>
            <div>
                <strong>Carlos Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>  
        </div>
    )
}
