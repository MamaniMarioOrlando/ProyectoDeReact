
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DrinksProvider } from './context/DrinksProvider'
import { UserProvider } from './context/UserProvider'
import { CategoriesProvider } from './context/categoriesProvider'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'


function App() {  
  return (
    <>
    
    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <MainLayout>
            <AppRoutes/>
          </MainLayout>
        </DrinksProvider>
      </CategoriesProvider>
      
    </UserProvider>
      
    </>
  )
}

export default App
