import { AboutServicesCardStyled } from './styled'

export const AboutServicesCard = ({ image, title, paragraph }) => {
  return (
    <AboutServicesCardStyled>
      <div className='container'>
        <img src={image} alt='' />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </AboutServicesCardStyled>
  )
}
