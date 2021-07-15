import { ContainerStyled, MainStyled, SidebarStyled } from './styled'
import { Switch } from '@material-ui/core'
import { Profile } from '../../components/SidebarProfile'
import { Footer } from '../../components/Footer'
import { Nav } from '../../components/SidebarNav'

export const Layout = ({ themeToggler, children }) => {
  return (
    <ContainerStyled>
      <div className='container-switch'>
        <Switch className='toggle-switch' onChange={themeToggler} />
      </div>
      <SidebarStyled>
        <Profile />
        <Nav />
        <Footer />
      </SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </ContainerStyled>
  )
}
