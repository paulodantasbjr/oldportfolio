import styled from 'styled-components'

export const NavStyled = styled.nav`
  width: 100%;
  text-align: center;
  li {
    display: block;
    .active {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
    a {
      padding: ${({ theme }) => theme.spacing.xxs};
      display: block;
      position: relative;
      z-index: 10;
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.weight.light};
      letter-spacing: 3px;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: ${({ theme }) => theme.colors.primary.light};
        transition: All 0.4s ${({ theme }) => theme.transitions.sharp};
        opacity: 0.2;
        z-index: -1;
      }
    }
    a:hover::before {
      width: 100%;
      height: 100%;
    }
  }
`
