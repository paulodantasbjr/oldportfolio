import { TitleStyled } from './styled'

export const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </TitleStyled>
  )
}
