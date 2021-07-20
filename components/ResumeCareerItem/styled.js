import styled from 'styled-components'

export const ResumeCareerItemStyled = styled.div`
  display: flex;
  align-items: baseline;

  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    flex: 1;
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.xs};
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.mode.border.main};
      background-color: ${({ theme }) => theme.mode.border.main};
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    width: 100%;
    flex: 3;
    padding-left: ${({ theme }) => theme.spacing.xl};
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: ${({ theme }) => theme.mode.border.dark};
    }
    h3 {
      color: ${({ theme }) => theme.colors.primary.main};
      padding-bottom: 0.4rem;
    }
    h5 {
      color: ${({ theme }) => theme.colors.secondary.main};
      padding-bottom: 0.6rem;
    }
    p {
      font-weight: ${({ theme }) => theme.weight.light};
    }
  }
`
