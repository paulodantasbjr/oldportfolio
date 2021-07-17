import { HomeDescriptionStyled, HomeIconsStyled } from './styled'
import HomeStyled from './styled'
import Link from 'next/link'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import Particle from '../../components/Particle'

const Home = () => {
  return (
    <HomeStyled>
      <Particle />

      <HomeDescriptionStyled>
        <h1>
          Oi, Me chamo <span>Paulo Dantas</span>
        </h1>
        <p>
          Analista de sistemas com mais de 8 anos de experiência no
          desenvolvimento de soluções Web e Mobile.
        </p>
        <HomeIconsStyled>
          <Link href='https://github.com/paulodantasrj'>
            <a className='iGithubStyled'>
              <GrGithub />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/paulodantasjr/'>
            <a className='iLinkedinStyled '>
              <GrLinkedin />
            </a>
          </Link>
        </HomeIconsStyled>
      </HomeDescriptionStyled>
    </HomeStyled>
  )
}
export default Home
