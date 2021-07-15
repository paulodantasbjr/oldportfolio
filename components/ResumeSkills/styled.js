import styled from 'styled-components'

export const ResumeSkillsStyled = styled.article`
  display: flex;
  flex-direction: column;
  .resume-content {
    margin-top: ${({ theme }) => theme.spacing.xl};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: ${({ theme }) => theme.spacing.sm};
    grid-column-gap: ${({ theme }) => theme.spacing.md};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`
