import Head  from "next/head"
import { GetServerSideProps } from 'next'
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from '../components/Profile'
import { CountdownProvider } from "../Contexts/CountdownContext"
import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../Contexts/ChallengesContext'
import { NavBarContainer } from "../components/NavBarContainer"
import { DefaultTheme, ThemeProvider } from "styled-components"
import usePersistedState from "../utils/usePersistedState"
import dark from "../styles/Theme/dark"
import light from "../styles/Theme/light"

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
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <Head>
            <title>Inicio | move.it</title>
          </Head>
          <ExperienceBar />
          <NavBarContainer />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
        </ThemeProvider>
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