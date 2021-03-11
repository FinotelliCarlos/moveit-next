import { GetServerSideProps } from 'next'
import Head from "next/head"
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Navbar } from '../components/Navbar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../Contexts/ChallengesContext'
import { CountdownProvider } from "../Contexts/CountdownContext"
import usePersistedState from '../Contexts/usePersistedState'
import { ContainerProfileCount, HeadElements, IndexContainer, IndexSection, EnvDivChallengBox } from "../styles/pages/Home.components"
import dark from '../styles/Theme/dark'
import light from '../styles/Theme/light'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ChallengesProvider level={ props.level }
      currentExperience={ props.currentExperience}
      challengesCompleted={ props.challengesCompleted}
    >
          <IndexContainer>
            <Head>
              <title>Time.xp</title>
            </Head>
            <ThemeProvider theme={theme}>
              <HeadElements>
                <Navbar toggleTheme={toggleTheme} />
                <ExperienceBar />
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
            </ThemeProvider>
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