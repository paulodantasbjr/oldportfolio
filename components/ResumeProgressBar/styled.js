import styled from 'styled-components'

export const ResumeProgressBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: ${({ theme }) => theme.spacing.xs};
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: ${({ theme }) => theme.mode.border.main};
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary.main};
      }
    }
  }
`
