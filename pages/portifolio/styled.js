import styled from 'styled-components'

const PortifolioStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
export default PortifolioStyled

export const PortifolioReposStyled = styled.article`
  .repo-content {
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.sm};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-top: ${({ theme }) => theme.spacing.lg};
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: ${({ theme }) => theme.spacing.md};
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export const PortifolioPaginateStyled = styled.article`
  width: 100%;
  .containerStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.primary.light};
      background-color: ${({ theme }) => theme.colors.primary.light};
      border-radius: 50%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    .disabledStyled {
      border: 1px solid ${({ theme }) => theme.mode.buttons.disabled};
      background-color: ${({ theme }) => theme.mode.buttons.disabledBackground};
    }
    .activeStyled {
      border: 1px solid ${({ theme }) => theme.colors.secondary.light};
      background-color: ${({ theme }) => theme.colors.secondary.light};
    }
  }
`
