import { GetServerSideProps } from 'next'
import Head from "next/head"
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { NavBar } from '../components/Navbar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../Contexts/ChallengesContext'
import { CountdownProvider } from "../Contexts/CountdownContext"
import { ContainerProfileCount, EnvDivChallengBox, HeadElements, IndexContainer, IndexSection } from "../styles/pages/Home.components"

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider level={ props.level }
      currentExperience={ props.currentExperience}
      challengesCompleted={ props.challengesCompleted}
    >
          <IndexContainer>
            <Head>
              <title>Time.xp</title>
            </Head>
              <HeadElements>
                <ExperienceBar />
                <NavBar />
              </HeadElements>

              <CountdownProvider>

                <IndexSection>
                  <ContainerProfileCount>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                  </ContainerProfileCount>
                  <EnvDivChallengBox>
                    <ChallengeBox />
                  </EnvDivChallengBox>
                </IndexSection>

              </CountdownProvider>
          </IndexContainer>

    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}