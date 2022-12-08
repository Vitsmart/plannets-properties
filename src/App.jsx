
//import './App.css'

import { createBrowserRouter, Outlet, Navigate, RouterProvider, Route} from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { LeftBar } from './components/leftBar/leftBar'
import { RightBar } from './components/rightBar/RightBar'
import { Home } from './pages/Home/Home'
import { Profile } from './components/profile/Profile'
import { Login } from './pages/login/login'
import { Register } from './pages/register/register'


function App() {
  const currentUser = true;
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div style={{ display: "flex"}}>
    
        <LeftBar />
        <Home />
      

      </div>
    </div>
  )
};
const ProtectedRoute = ({children}) =>{
  if (!currentUser) {
    return <Navigate to="/login" />
  }
  return children;
}
  const router = createBrowserRouter([
{
  path:"/", element:
  (<ProtectedRoute> 
    <Layout /> 
    </ProtectedRoute>),
  children:[
{
  path:"/", element:<Home />
},
{
  path:"/profile/:id", element:<Profile />
},
  ]
},


  {
path:"/login", element:<Login />
},
{
path:"/register", element:<Register/>
  },
]);
  return (
    <>
    <RouterProvider router = {router}/>
    
    
    </>
  )
  
}

export default App
