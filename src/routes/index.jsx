import {Route, Routes} from 'react-router-dom'
import {Home} from '../pages/Home'
import { NotFound } from '../pages/Home/NotFound'
import { Login } from '../pages/Home/Login'
import { Profile } from '../pages/Home/Profile'
import { ProtectedRouter } from './ProtectedRouter'
export const AppRoutes = () => {
  return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/user' element={<ProtectedRouter/>}>
              <Route path='profile' element={<Profile/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>

  )
}
