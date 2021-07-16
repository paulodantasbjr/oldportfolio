import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/DesignStystem/GlobalStyles'
import { darkTheme, lightTheme } from '../styles/DesignStystem/Theme'
import { Layout } from '../styles/Layout'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  const [navToggle, setNavToggle] = useState(false)

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout
        themeToggler={themeToggler}
        setNavToggle={setNavToggle}
        navToggle={navToggle}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
