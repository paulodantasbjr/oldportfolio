import { ResumeProgressBarStyled } from './styled'

export const ResumeProgressBar = ({ title, width, text }) => {
  return (
    <ResumeProgressBarStyled>
      <h5>{title}</h5>
      <div className='progress-bar'>
        <p>{text}</p>
        <div className='progress'>
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ResumeProgressBarStyled>
  )
}
