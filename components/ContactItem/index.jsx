import { ContactItemStyled } from './styled'

export const ContactItem = ({ title, icon, cont1, cont2 }) => {
  return (
    <ContactItemStyled>
      <div className='left-content'>{icon}</div>
      <div className='right-content'>
        <h5>{title}</h5>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </ContactItemStyled>
  )
}
