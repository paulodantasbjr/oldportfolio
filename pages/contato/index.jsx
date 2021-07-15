import { ContactContainerStyled } from './styled'
import ContactStyled from './styled'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { ContactItem } from '../../components/ContactItem'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const Contact = () => {
  const phone = <PhoneIcon />
  const email = <EmailIcon />
  const location = <LocationOnIcon />
  return (
    <ContactStyled>
      <ContactContainerStyled>
        <Title title={'Contato'} span={'contato'} />
        <div className='contact-content'>
          <div className='left-content'>
            <h4>Entre em contato</h4>

            <form>
              <div className='form-field'>
                <label htmlFor='name'>Digite seu nome*</label>
                <input type='text' id='name' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Digite o assunto</label>
                <input type='text' id='subject' />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Digite a mensagem*</label>
                <textarea
                  name='textarea'
                  id='textarea'
                  cols='10'
                  rows='5'
                ></textarea>
              </div>
              <div className='form-field'>
                <Button title={'Enviar'} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem
              title={'Telefone'}
              icon={phone}
              cont1={'+55 (21) 9 9267-6656'}
            />
            <ContactItem
              title={'Email'}
              icon={email}
              cont1={'paulorobertosjm@gmail.com'}
            />
            <ContactItem
              title={'Endereço'}
              icon={location}
              cont1={'Rua Candida Pires, 238'}
              cont2={'São João de Meriti, RJ, Brasil'}
            />
          </div>
        </div>
      </ContactContainerStyled>
    </ContactStyled>
  )
}
export default Contact
