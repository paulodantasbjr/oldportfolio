import ResumeStyled from './styled'
import { ResumeSkills } from '../../components/ResumeSkills'
import { ResumeCareer } from '../../components/ResumeCareer'

const Resumo = () => {
  return (
    <ResumeStyled>
      <ResumeSkills />
      <ResumeCareer />
    </ResumeStyled>
  )
}
export default Resumo
