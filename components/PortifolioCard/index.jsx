import { PortifolioCardStyled } from './styled'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { BiDetail } from 'react-icons/bi'

export const PortifolioCard = ({ repos }) => {
  return (
    <PortifolioCardStyled>
      <div className='card-header'>
        <img
          src={
            repos.language == 'JavaScript'
              ? '/img/react.png'
              : '/img/default.png'
          }
          alt='Imagem do projeto'
        />
      </div>
      <div className='card-container'>
        <div className='card-data'>
          <cite>{`Criado: ${new Intl.DateTimeFormat('pt-br').format(
            new Date(repos.created_at)
          )}`}</cite>
        </div>
        <div className='card-title'>
          <h4>{repos.name}</h4>
        </div>
        <div className='card-body'>
          <p>
            {repos.description == null ? 'Sem descrição' : repos.description}
          </p>
        </div>
        <div className='card-data'>
          <cite>{`Update: ${new Intl.DateTimeFormat('pt-br').format(
            new Date(repos.updated_at)
          )}`}</cite>
        </div>
      </div>
      <div className='card-footer'>
        <Link href={repos.html_url}>
          <a className='iGithubStyled'>
            <GrGithub />
          </a>
        </Link>
        <Link href={`/portifolio/${repos.name}`}>
          <a className='iDetilsStyled '>
            <BiDetail />
          </a>
        </Link>
      </div>
    </PortifolioCardStyled>
  )
}
