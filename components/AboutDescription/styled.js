import styled from 'styled-components'

export const AboutDescriptionStyled = styled.article`
  width: 100%;
  .content {
    display: flex;
    margin-top: ${({ theme }) => theme.spacing.xl};
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
    .left-content {
      width: 100%;
      margin-right: ${({ theme }) => theme.spacing.xs};
      img {
        width: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 0;
      }
    }
    .right-content {
      width: 100%;
      margin-left: ${({ theme }) => theme.spacing.xs};
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 0;
      }
      h4 {
        color: ${({ theme }) => theme.mode.text.primary};
      }
      .paragraph {
        padding: ${({ theme }) => theme.spacing.sm} 0;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
          padding: ${({ theme }) => theme.spacing.xs} 0;
        }
      }
      .about-info {
        display: flex;
        margin-bottom: ${({ theme }) => theme.spacing.sm};
        .info-title {
          padding-right: ${({ theme }) => theme.spacing.md};
          p {
            font-weight: ${({ theme }) => theme.weight.medium};
          }
        }
        .info-title,
        .info {
          p {
            padding: 0.3rem 0;
          }
        }
      }
    }
  }
`
