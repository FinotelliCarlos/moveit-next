import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import { ChallengeBoxCountainer,
        ChallengeNotActive,
        ChallengeNotActiveStrong,
        ChallengeNotActiveParagraph,
        ChallengeNotActiveImg,
        ChallengeActive,
        ChallengeActiveHeader,
        ChallengeActiveMain,
        ChallengeActiveStrong,
        ChallengeActiveParagraph,
        ChallengeActiveFooter,
        ChallengeActiveFailedbutton,
        ChallengeActiveSucceededbutton, 
        ChallengeActiveImage} from '../styles/components/ChallengeBox.components' 

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    return (
        <ChallengeBoxCountainer>
            {activeChallenge ? (
                <ChallengeActive>
                    <ChallengeActiveHeader>
                        Ganhe {activeChallenge.amount} xp
                    </ChallengeActiveHeader>
                    <ChallengeActiveMain>
                        <ChallengeActiveImage src={`icons/${activeChallenge.type}.svg`} />
                        <ChallengeActiveStrong>Novo desafio</ChallengeActiveStrong>
                        <ChallengeActiveParagraph>
                            {activeChallenge.description}
                        </ChallengeActiveParagraph>
                    </ChallengeActiveMain>

                    <ChallengeActiveFooter>
                        <ChallengeActiveFailedbutton 
                            type="button" 
                            onClick={handleChallengeFailed}>
                                Falhei
                        </ChallengeActiveFailedbutton>
                        <ChallengeActiveSucceededbutton 
                            type="button" 
                            onClick={handleChallengeSucceeded}>
                                Completei
                        </ChallengeActiveSucceededbutton>
                    </ChallengeActiveFooter>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <ChallengeNotActiveStrong>
                        Finalize um ciclo para receber um desafio
                    </ChallengeNotActiveStrong>
                    <ChallengeNotActiveParagraph>
                        <ChallengeNotActiveImg src="icons/level-up.svg" alt="Level Up"/>
                        Suba de Level completando desafios.
                    </ChallengeNotActiveParagraph>
                </ChallengeNotActive>
            )}

        </ChallengeBoxCountainer>
    )
}
