import styled from 'styled-components'

export const IconTitleStyled = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  p {
    padding-right: 1rem;
  }
  svg {
    font-size: ${({ theme }) => theme.size.xl};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.size.xxl};
    }
  }
  h4 {
    color: ${({ theme }) => theme.mode.text.main};
  }
`
