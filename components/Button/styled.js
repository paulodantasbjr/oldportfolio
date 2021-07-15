import styled from 'styled-components'

export const ButtonStyled = styled.a`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding-top: ${({ theme }) => theme.spacing.xxs};
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
  padding-right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey.light};
  }
`
