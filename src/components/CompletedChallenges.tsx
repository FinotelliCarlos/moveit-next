import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import {CompletedChallengesContainer,
    CompletedChallengesSpanFirst,
    CompletedChallengesSpanLast
} from '../styles/components/CompletedChallenges.components'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengesContainer>
            <CompletedChallengesSpanFirst>
                Desafios Completos
            </CompletedChallengesSpanFirst>
            <CompletedChallengesSpanLast>
                {challengesCompleted}
            </CompletedChallengesSpanLast>
        </CompletedChallengesContainer>
    )
}
