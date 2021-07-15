import { ResumeCareerItemStyled } from './styled'

export const ResumeCareerItem = ({ year, title, subTitle, text }) => {
  return (
    <ResumeCareerItemStyled>
      <div className='left-content'>
        <p>{year}</p>
      </div>
      <div className='right-content'>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
    </ResumeCareerItemStyled>
  )
}
