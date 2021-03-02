import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import { ProfileContainer, ProfileElements, ProfileImage, ProfileLevelIcon, ProfileParagraph, ProfileStrong } from '../styles/components/Profile.components';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <ProfileContainer>
            <ProfileImage src="http://github.com/finotellicarlos.png" alt="Finotelli"/>
            <ProfileElements>
                <ProfileStrong>Carlos Finotelli</ProfileStrong>
                <ProfileParagraph>
                    <ProfileLevelIcon src="icons/level.svg" alt="Level"/>
                    Level {level}
                </ProfileParagraph>
            </ProfileElements>  
        </ProfileContainer>
    )
}
