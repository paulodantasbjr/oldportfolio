import styled from 'styled-components'

export const ResumeStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
