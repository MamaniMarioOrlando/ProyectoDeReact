
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './context/UserProvider'
import { CategoriesProvider } from './context/categoriesProvider'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'


function App() {  
  return (
    <>
    
    <UserProvider>
      <CategoriesProvider>
        <MainLayout>
          <AppRoutes/>
        </MainLayout>
      </CategoriesProvider>
      
    </UserProvider>
      
    </>
  )
}

export default App
