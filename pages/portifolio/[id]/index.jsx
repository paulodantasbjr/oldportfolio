import { useRouter } from 'next/router'
import { RepoStyled } from './styled'

const Repo = ({ repo }) => {
  const { isFallback } = useRouter()
  if (isFallback) {
    return <p>Carregando...</p>
  }
  return (
    <RepoStyled>
      <h2>{repo.name}</h2>
      <p>Em construcao</p>
    </RepoStyled>
  )
}

export default Repo

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.github.com/users/paulodantasrj/repos`)
  const data = await res.json()

  const paths = data.map((repo) => {
    return {
      params: { id: repo.name },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`https://api.github.com/repos/paulodantasrj/${id}`)
  const data = await res.json()

  return {
    props: {
      repo: data,
    },
  }
}

//https://api.github.com/repos/paulodantasrj/b2wprojectetapa1
