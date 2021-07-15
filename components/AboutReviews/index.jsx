import { Title } from '../Title'
import { AboutReviewsStyled } from './styled'
import { AboutReviewsItem } from '../AboutReviewsItem'
export const AboutReviews = () => {
  return (
    <AboutReviewsStyled>
      <Title title={'Avaliações'} span={'Avaliações'} />
      <div className='reviews'>
        <AboutReviewsItem
          text={'Atencioso e prestativo, otimo profissional'}
          author={'Priscila Rodrigues, analista de suporte TRF'}
        />
        <AboutReviewsItem
          text={'Pessoa mais dedicada que ja trabalhei'}
          author={'Selma Bazilio, coordenadora de projetos Stefanini'}
        />
      </div>
    </AboutReviewsStyled>
  )
}
