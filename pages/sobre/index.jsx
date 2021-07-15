import AboutStyled from './styled'
import { AboutDescription } from '../../components/AboutDescription'
import { AboutServices } from '../../components/AboutServices'
import { AboutReviews } from '../../components/AboutReviews'

const About = () => {
  return (
    <AboutStyled>
      <AboutDescription />
      <AboutServices />
      <AboutReviews />
    </AboutStyled>
  )
}
export default About
