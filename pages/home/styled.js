import styled from 'styled-components'

export const HomeStyled = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
  #tsparticles {
    width: 100%;
    height: 100vh;
  }
`
export const HomeDescriptionStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
  }

  h1 {
    text-align: center;
  }
  span {
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.primary.main};
  }
  p {
    text-align: center;
  }
`
export const HomeIconsStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.xs};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing.xxs};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      padding: ${({ theme }) => theme.spacing.xxs};
    }
  }
`
