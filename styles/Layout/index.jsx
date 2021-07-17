import { ContainerStyled, MainStyled, SidebarStyled } from './styled'

import { Switch } from '@material-ui/core'
import { Profile } from '../../components/SidebarProfile'
import { Footer } from '../../components/Footer'
import { Nav } from '../../components/SidebarNav'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

export const Layout = ({ themeToggler, children, setNavToggle, navToggle }) => {
  return (
    <ContainerStyled>
      <div className='container-switch'>
        <Switch onChange={themeToggler} />
      </div>
      <div className='container-hamburguer'>
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>
      <SidebarStyled navToggle={navToggle}>
        <Profile />
        <Nav />
        <Footer />
      </SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </ContainerStyled>
  )
}
