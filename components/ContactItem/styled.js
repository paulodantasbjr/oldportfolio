import styled from 'styled-components'

export const ContactItemStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.mode.background.dark};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  .left-content {
    border: 1px solid ${({ theme }) => theme.mode.border.main};
    margin-right: ${({ theme }) => theme.spacing.sm};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 100px;
    }
  }

  .right-content {
    h5 {
      color: ${({ theme }) => theme.mode.text.primary};
      padding-bottom: ${({ theme }) => theme.spacing.xxs};
    }
    p {
      font-weight: ${({ theme }) => theme.weight.light};
    }
  }
`
