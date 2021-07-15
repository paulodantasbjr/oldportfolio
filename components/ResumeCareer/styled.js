import styled from 'styled-components'

export const ResumeCareerStyled = styled.article`
  margin: ${({ theme }) => theme.spacing.xl} 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }
  .resume-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: ${({ theme }) => theme.spacing.xl};
    border-left: 2px solid ${({ theme }) => theme.mode.border.main};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`
