import { AboutDescriptionStyled } from './styled'
import { Title } from '../../components/Title'
import { Button } from '../Button'

export const AboutDescription = () => {
  return (
    <AboutDescriptionStyled>
      <Title title={'Sobre mim'} span={'Sobre mim'} />
      <div className='content'>
        <div className='left-content'>
          <img src='/img/resume.jpg' alt='' />
        </div>
        <div className='right-content'>
          <h3>Desenvolvedor Full Stack</h3>
          <p className='paragraph'>
            Graduado em Analise de desenvolvimento de sistemas. Inglês Avançado.
            Experiência com JavaScript( ReactJS, ReactNative, NodeJS,
            ExpressJS), MongoDB, MySQL e Java/Kotlin para desenvolvimento
            android. Disponibilidade para atuar em Home Office, viagens e
            mudanças.
          </p>
          <div className='about-info'>
            <div className='info-title'>
              <p>Nome</p>
              <p>Idade</p>
              <p>Nacionalidade</p>
              <p>Idiomas</p>
              <p>Stack</p>
              <p>Serviços</p>
            </div>
            <div className='info'>
              <p>: Paulo Dantas</p>
              <p>: 28</p>
              <p>: Brasileiro </p>
              <p>: portugues, Ingles, Espanhol </p>
              <p>: MERN</p>
              <p>: CLT, PJ, Freelance</p>
            </div>
          </div>
          <Button title={'Download Cv'} />
        </div>
      </div>
    </AboutDescriptionStyled>
  )
}
