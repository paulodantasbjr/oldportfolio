import { ResumeCareerItemStyled } from './styled'

export const ResumeCareerItem = ({ year, title, subTitle, text }) => {
  return (
    <ResumeCareerItemStyled>
      <div className='left-content'>
        <p>{year}</p>
      </div>
      <div className='right-content'>
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
        <p>{text}</p>
      </div>
    </ResumeCareerItemStyled>
  )
}
