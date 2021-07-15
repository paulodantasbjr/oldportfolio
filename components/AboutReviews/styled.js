import styled from 'styled-components'

export const AboutReviewsStyled = styled.article`
  margin: ${({ theme }) => theme.spacing.xl} 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
  .reviews {
    margin-top: ${({ theme }) => theme.spacing.xl};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`
