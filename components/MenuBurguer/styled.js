import styled from 'styled-components'

export const StyledBurger = styled.div`
  position: absolute;
  top: 5px;
  right: 5%;
  z-index: 20;
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    z-index: 20;
  }
  button {
    margin: 0;
    padding: 0;
  }
  svg {
    padding: 0;
    font-size: 30px;
    color: ${({ theme }) => theme.mode.text.primary};
  }
`
