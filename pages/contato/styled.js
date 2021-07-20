import styled from 'styled-components'

const ContactStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
export default ContactStyled

export const ContactContainerStyled = styled.article`
  .contact-content {
    margin-top: ${({ theme }) => theme.spacing.xl};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${({ theme }) => theme.spacing.xxl};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(1, 1fr);
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
  .left-content {
    h4 {
      color: ${({ theme }) => theme.mode.text.primary};
      padding: ${({ theme }) => theme.spacing.xs} 0;
    }
    form {
      width: 100%;
      text-align: end;
      .form-field {
        margin-top: ${({ theme }) => theme.spacing.sm};
        position: relative;
        width: 100%;
        color: ${({ theme }) => theme.mode.text.primary};
        label {
          position: absolute;
          left: 20px;
          top: -20px;
          display: inline-block;
          background-color: ${({ theme }) => theme.mode.background.main};
          color: inherit;
          padding: 0 ${({ theme }) => theme.spacing.xxs};
        }
        input {
          border: 1px solid ${({ theme }) => theme.mode.border.main};
          outline: none;
          background: transparent;
          height: 50px;
          padding: ${({ theme }) => theme.spacing.xs};
          color: inherit;
          width: 100%;
        }
        textarea {
          background-color: transparent;
          color: inherit;
          border: 1px solid ${({ theme }) => theme.mode.border.main};
          outline: none;
          width: 100%;
          padding: ${({ theme }) => theme.spacing.xs};
        }
      }
    }
  }

  .right-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`
