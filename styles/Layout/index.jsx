import { ContainerStyled, MainStyled, SidebarStyled } from './styled'

import { Switch } from '@material-ui/core'
import { Profile } from '../../components/SidebarProfile'
import { Footer } from '../../components/Footer'
import { Nav } from '../../components/SidebarNav'
import { MenuBurguer } from '../../components/MenuBurguer'

export const Layout = ({ themeToggler, children, setNavToggle, navToggle }) => {
  return (
    <ContainerStyled>
      <div className='container-switch'>
        <Switch className='toggle-switch' onChange={themeToggler} />
      </div>
      <MenuBurguer navToggle={navToggle} setNavToggle={setNavToggle} />
      <SidebarStyled navToggle={navToggle}>
        <Profile />
        <Nav />
        <Footer />
      </SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </ContainerStyled>
  )
}
