import { Title } from '../Title'
import { AboutServicesStyled } from './styled'
import { AboutServicesCard } from '../AboutServicesCard'

export const AboutServices = () => {
  return (
    <AboutServicesStyled>
      <Title title={'Serviços'} span={'Serviços'} />
      <div className='services'>
        <AboutServicesCard
          image='/img/reactjs.png'
          title={'Front-end'}
          paragraph={
            'Desenvolvo interfaces modernas e reativas na web utilizando ReactJS e ReactNative.'
          }
        />
        <AboutServicesCard
          image='/img/nodejs.png'
          title={'Back-end'}
          paragraph={
            'Construo arquiteturas escaláveis e simples para a web utilizando NodeJS'
          }
        />
        <AboutServicesCard
          image='/img/bd.png'
          title={'Dados'}
          paragraph={
            'Arquiteto uma rede de dados com um conjunto abrangente de ferramentas utilizando MongoDB'
          }
        />
      </div>
    </AboutServicesStyled>
  )
}
