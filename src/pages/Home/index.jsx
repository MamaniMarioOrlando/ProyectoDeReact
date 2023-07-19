import { DrinkList } from '../../components/DrinkList'
import { DrinkModalDetail } from '../../components/DrinkModelDetail'
import { SearchForm } from '../../components/Header/SearchForm'

export const Home = () => {


  return (
    <>
      <SearchForm/>
      <DrinkList/>
      <DrinkModalDetail/>

    </>
  )
}
