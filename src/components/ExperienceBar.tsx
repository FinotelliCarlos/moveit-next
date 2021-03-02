import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import {
    ExperienceBarHeader,
    ExperienceBarSpanInitial,
    ExperienceBarPercent,
    ExperiencePercentCurrent,
    ExperienceBarSpanPercent,
    ExperienceBarSpanFinish
} from '../styles/components/ExperienceBar.components'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <ExperienceBarHeader>
            <ExperienceBarSpanInitial>
                0 xp
            </ExperienceBarSpanInitial>
            <ExperienceBarPercent>
                <ExperiencePercentCurrent style={{ width: `${percentToNextLevel}%`}} />
                <ExperienceBarSpanPercent 
                style={{left:`${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </ExperienceBarSpanPercent>
            </ExperienceBarPercent>
            <ExperienceBarSpanFinish>
                {experienceToNextLevel} xp
            </ExperienceBarSpanFinish>
        </ExperienceBarHeader>
    )
}
