import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavStyled } from './styled'

export const Nav = () => {
  const router = useRouter()
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href='/sobre'>
            <a className={router.pathname == '/sobre' ? 'active' : ''}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href='/resumo'>
            <a className={router.pathname == '/resumo' ? 'active' : ''}>
              Resumo
            </a>
          </Link>
        </li>
        <li>
          <Link href='/portifolio'>
            <a className={router.pathname == '/portifolio' ? 'active' : ''}>
              Portifolio
            </a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a className={router.pathname == '/blog' ? 'active' : ''}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/contato'>
            <a className={router.pathname == '/contato' ? 'active' : ''}>
              Contato
            </a>
          </Link>
        </li>
      </ul>
    </NavStyled>
  )
}
