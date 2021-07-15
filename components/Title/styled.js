import styled from 'styled-components'

export const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: ${({ theme }) => theme.mode.text.primary};
    text-transform: uppercase;
    position: relative;
    padding-bottom: ${({ theme }) => theme.size.sm};
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: ${({ theme }) => theme.colors.secondary.main};
      border-radius: 15px;
      left: 0;
      z-index: 3;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: ${({ theme }) => theme.colors.primary.main};
      border-radius: 15px;
      left: 0;
      z-index: 3;
    }
    span {
      font-weight: ${({ theme }) => theme.weight.bold};
      color: ${({ theme }) => theme.mode.text.primary};
      opacity: 0.6;
      position: absolute;
      left: 0;
      top: 30%;
    }
  }
`
