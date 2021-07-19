import styled from 'styled-components'

export const AvatarStyled = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.mode.border.dark};
  text-align: center;
  padding: ${({ theme }) => theme.size.md};
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid ${({ theme }) => theme.mode.border.dark};
  }
`
