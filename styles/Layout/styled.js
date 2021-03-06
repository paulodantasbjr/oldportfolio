import styled from 'styled-components'

export const ContainerStyled = styled.div`
  position: relative;

  .container-hamburguer {
    box-shadow: ${({ theme }) => theme.shadow.main};
    background-color: ${({ theme }) => theme.mode.background.dark};
    border-radius: 5px;
    position: absolute;
    top: 5px;
    right: 2%;
    z-index: 10;
    display: none;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: block;
    }
    button {
      padding: 0;
      margin: 0;
    }
    svg {
      color: ${({ theme }) => theme.mode.buttons.active};
      font-size: ${({ theme }) => theme.size.xl};
    }
  }
  .container-switch {
    box-shadow: ${({ theme }) => theme.shadow.main};
    background-color: ${({ theme }) => theme.mode.background.dark};
    border-radius: 5px;
    position: absolute;
    top: 5px;
    right: 20%;
    z-index: 10;
  }
`
export const SidebarStyled = styled.section`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mode.background.sidebar};
  overflow: hidden;
  transition: all 0.4s ${({ theme }) => theme.transitions.easeInOut};
  border-right: 1px solid ${({ theme }) => theme.mode.border.dark};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: ${({ navToggle }) =>
      navToggle ? 'translateX(0)' : 'translateX(-200%)'};
    z-index: 20;
    height: 100%;
  }
`
export const MainStyled = styled.section`
  position: relative;
  margin-left: 16.3rem;
  background-color: ${({ theme }) => theme.mode.background.main};
  min-height: 100vh;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0;
  }
`
