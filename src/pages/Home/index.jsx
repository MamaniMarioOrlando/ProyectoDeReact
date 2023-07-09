import { SearchForm } from '../../components/Header/SearchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

export const Home = () => {

  const {user,logout} = useUser()

  return (
    <>
      <SearchForm/>
      <h1>Home</h1>
      <br />
      {
        user ? 
        (
        <>
          <h1>Hola {user}</h1> 
          <button onClick={() => logout()}>Salir</button>
        </>
        )
        :
        <Link to={'/login'}>Login</Link>  
      }
    </>
  )
}
