import styled from 'styled-components'

export const ContainerStyled = styled.div`
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: absolute;
  }
  .container-switch {
    box-shadow: ${({ theme }) => theme.shadow.main};
    background-color: ${({ theme }) => theme.mode.background.dark};
    border-radius: 5px;
    position: absolute;
    top: 5px;
    right: 20%;
    z-index: 10;
    .toggle-switch {
      color: blue;
    }
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: translateX(-100%);
    z-index: 20;
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
