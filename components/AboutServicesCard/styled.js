import styled from 'styled-components'

export const AboutServicesCardStyled = styled.div`
  background-color: ${({ theme }) => theme.mode.background.main};
  border-left: 1px solid ${({ theme }) => theme.mode.border.dark};
  border-top: 8px solid ${({ theme }) => theme.mode.border.dark};
  border-right: 1px solid ${({ theme }) => theme.mode.border.dark};
  border-bottom: 1px solid ${({ theme }) => theme.mode.border.dark};
  transition: all 0.4s ${({ theme }) => theme.transitions.easeInOut};
  border &:hover {
    border-top: 8px solid ${({ theme }) => theme.colors.secondary.main};
    transform: translateY(3px);
  }
  .container {
    padding: ${({ theme }) => theme.spacing.xs};
    img {
      width: 30%;
    }
    h4 {
      color: ${({ theme }) => theme.mode.text.primary};
      padding: ${({ theme }) => theme.spacing.xs} 0;
      position: relative;
      &::after {
        content: '';
        width: ${({ theme }) => theme.spacing.lg};
        background-color: ${({ theme }) => theme.colors.secondary.main};
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }

    p {
      padding: 0.8rem 0;
    }
  }
`
