import { IconTitleStyled } from './styled'

export const IconTitle = ({ icon, title }) => {
  return (
    <IconTitleStyled>
      <p>{icon}</p>
      <h4>{title}</h4>
    </IconTitleStyled>
  )
}
