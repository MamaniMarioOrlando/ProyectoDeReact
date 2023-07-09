

import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import {Home} from '../pages/Home'
import { NotFound } from '../pages/Home/NotFound'
import { Login } from '../pages/Home/Login'
export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}
