import styled from 'styled-components'

export const AboutRevivewItemStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  border-left: 6px solid ${({ theme }) => theme.mode.border.main};
  background-color: ${({ theme }) => theme.mode.background.dark};
  position: relative;
  width: 100%;
  &:not(:first-child) {
  }
  &::after {
    content: '';
    position: absolute;
    left: ${({ theme }) => theme.spacing.sm};
    border-width: ${({ theme }) => theme.spacing.xxs};
    top: 100%;
    border-style: solid;
    border-color: ${({ theme }) => theme.mode.background.dark} transparent
      transparent ${({ theme }) => theme.mode.background.dark};
  }
  cite {
    font-size: ${({ theme }) => theme.size.xxs};
    font-weight: ${({ theme }) => theme.weight.light};
  }
  blockquote {
    font-size: ${({ theme }) => theme.size.sm};
    font-weight: ${({ theme }) => theme.weight.light};
    padding: ${({ theme }) => theme.spacing.xs} 0;
    text-align: end;
  }
`
