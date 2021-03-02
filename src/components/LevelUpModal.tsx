import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import { CloseModal,
    ContainerButton,
    ContainerElement,
    ContainerHeader,
    ContainerParagraph,
    ContainerStrong,
    Overlay 
} from '../styles/components/LevelUpModal.components';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <Overlay>
            <ContainerElement>
                <ContainerHeader>
                    {level}
                </ContainerHeader>

                <ContainerStrong>
                    Parabéns!
                </ContainerStrong>
                <ContainerParagraph>
                    Você alcançou um novo level.
                </ContainerParagraph>

                <ContainerButton 
                type='button'>
                    <CloseModal 
                    src="/icons/close.svg" 
                    alt="Fechar modal" 
                    onClick={closeLevelUpModal}/>
                </ContainerButton>
            </ContainerElement>
        </Overlay>
    )
}