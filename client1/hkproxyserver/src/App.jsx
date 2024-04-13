 import {RouterProvider, createBrowserRouter} from "react-router-dom"

import Url from './components/sites/Sites'
import Blocked from './components/getblockedsite/Blockedsite'
import Add from './components/addBlockedSites/Add'
import BlockedEdit from './components/updateblockedsite/Edit'
import Inspectadd from "./components/addInspectSites/AddInspect"
import Inspect from "./components/getinspectsite/Inspectsite"
import Inspectdetails from "./components/getinspectsitedetails/Inspectsitedetails"
import Modified from "./components/addModifiedSites/Addmodified"
function App(){
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Url/>
    },
    {
      path:"/blocked",
      element:<Blocked/>
    },
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/inspect",
      element:<Inspect/>

    },
    {
      path:"/inspect/add",
      element:<Inspectadd/>
    },
    {
      path:"blocked/edit/:id",
      element:<BlockedEdit/>,
    },
    {
      path:"/modified/add",
      element:<Modified/>
    },
    {
      path:"/inspect/details/:id",
      element:<Inspectdetails/>
    }
  ])
  return(
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;