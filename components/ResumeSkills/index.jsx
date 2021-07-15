import { ResumeSkillsStyled } from './styled'
import { Title } from '../Title'
import { ResumeProgressBar } from '../ResumeProgressBar'

export const ResumeSkills = () => {
  return (
    <ResumeSkillsStyled>
      <Title title={'Resumo'} span={'resumo'} />
      <div className='resume-content'>
        <ResumeProgressBar title={'HTML5'} width={'95%'} text={'95%'} />
        <ResumeProgressBar title={'CSS'} width={'90%'} text={'90%'} />
        <ResumeProgressBar title={'JAVASCRIPT'} width={'80%'} text={'80%'} />
        <ResumeProgressBar title={'REACTJS'} width={'90%'} text={'90%'} />
        <ResumeProgressBar title={'REACTNATIVE'} width={'80%'} text={'80%'} />
        <ResumeProgressBar title={'NODEJS'} width={'75%'} text={'75%'} />
        <ResumeProgressBar title={'MONGODB'} width={'70%'} text={'70%'} />
        <ResumeProgressBar title={'GITHUB'} width={'90%'} text={'90%'} />
      </div>
    </ResumeSkillsStyled>
  )
}
