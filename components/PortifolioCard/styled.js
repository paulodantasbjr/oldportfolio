import styled from 'styled-components'

export const PortifolioCardStyled = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing.xxs};
  box-shadow: ${({ theme }) => theme.shadow.main};
  transition: all 0.5s ${({ theme }) => theme.transitions.easeInOut};
  &:hover {
    transform: scale(1.1);
  }
  .card-header {
    width: 100%;
    background-color: ${({ theme }) => theme.mode.background.dark};
    img {
      width: 100%;
      height: 50px;
      object-fit: contain;
    }
  }
  .card-container {
    padding: ${({ theme }) => theme.spacing.xs};
    .card-data {
      text-align: center;
      margin-bottom: ${({ theme }) => theme.spacing.xxs};
      cite {
        font-size: ${({ theme }) => theme.spacing.xs};
        font-weight: ${({ theme }) => theme.weight.light};
      }
    }
    .card-title {
      margin: ${({ theme }) => theme.spacing.xs} 0;
      h4 {
        text-transform: uppercase;
      }
    }
    .card-body {
      margin: ${({ theme }) => theme.spacing.xs} 0;
      min-height: 70px;
    }
  }
  .card-footer {
    display: flex;
    padding: ${({ theme }) => theme.spacing.xs};
    justify-content: center;
    border-top: 2px solid ${({ theme }) => theme.mode.border.main};
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin-right: ${({ theme }) => theme.spacing.xs};
      }
    }
  }
`
