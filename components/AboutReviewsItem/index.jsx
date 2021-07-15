import { AboutRevivewItemStyled } from './styled'

export const AboutReviewsItem = ({ text, author }) => {
  return (
    <AboutRevivewItemStyled>
      <cite>{author}</cite>
      <blockquote>"{text}"</blockquote>
    </AboutRevivewItemStyled>
  )
}
