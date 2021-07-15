import styled from 'styled-components'

export const FooterStyled = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.mode.border.dark};
  text-align: center;
  width: 100%;
  p {
    padding: ${({ theme }) => theme.size.sm};
  }
`
