import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AppRootLayout, AuthenticationPage, FavoritePlacesPage, HomePage } from "./pages"



const router = createBrowserRouter([{
  path: '/',
  element: <AppRootLayout />,
  id: 'root',
  children: [
    {index: true, element: <HomePage />},
    {path: 'auth', element: <AuthenticationPage/>},
    {path: 'fav', element: <FavoritePlacesPage/>}
  ]
}])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App