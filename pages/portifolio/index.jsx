import { PortifolioReposStyled, PortifolioPaginateStyled } from './styled'
import PortifolioStyled from './styled'
import { PortifolioCard } from '../../components/PortifolioCard'
import { Title } from '../../components/Title'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

const Portifolio = ({ repos }) => {
  /******************* PAGINACAO *******************/
  const [pageNumber, setPageNumber] = useState(0)
  const repoPerPage = 6
  const pagesVisited = pageNumber * repoPerPage
  const displayRepos = repos
    .slice(pagesVisited, pagesVisited + repoPerPage)
    .map((repo) => {
      return <PortifolioCard key={repo.id} repos={repo} />
    })
  const pageCount = Math.ceil(repos.length / repoPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  /***********************************************/

  return (
    <PortifolioStyled>
      <PortifolioReposStyled>
        <Title title={'Projetos'} span={'projetos'} />
        <div className='repo-content'>{displayRepos}</div>
      </PortifolioReposStyled>
      <PortifolioPaginateStyled>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'containerStyled'}
          disabledClassName={'disabledStyled'}
          activeClassName={'activeStyled'}
        />
      </PortifolioPaginateStyled>
    </PortifolioStyled>
  )
}
export default Portifolio

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/paulodantasrj/repos')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      repos: data,
    },
    revalidate: 60 * 60 * 24 * 30,
  }
}
