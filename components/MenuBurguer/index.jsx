import { StyledBurger } from './styled'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

export const MenuBurguer = ({ navToggle, setNavToggle }) => {
  return (
    <StyledBurger>
      <IconButton onClick={() => setNavToggle(!navToggle)}>
        <MenuIcon />
      </IconButton>
    </StyledBurger>
  )
}
