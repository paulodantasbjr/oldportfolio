import styled from 'styled-components'

export const AboutServicesStyled = styled.article`
  margin-top: ${({ theme }) => theme.spacing.xl};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
  .services {
    margin-top: ${({ theme }) => theme.spacing.xl};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.xs};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
