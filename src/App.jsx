
import { Home } from "./Homepage";
import {createBrowserRouter, 
createRoutesFromElements,
Route,
RouterProvider} from 'react-router-dom'

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Home/>}>
      <Route index element={<Home/>}/>
      {/* <Route path="*" element={<ErrorPage/>}/> */}
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router = {router}/>
  )
}

export default App;