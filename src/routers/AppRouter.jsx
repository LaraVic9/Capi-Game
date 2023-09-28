import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll, ViewAboutUs, ViewSidebar } from '../views/index';
=======
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll, ViewAboutUs, } from '../views/index';
>>>>>>> ae63101a402fd85dacd7795440c348dd2d7dd7a5
import BaseLayout from "../layouts/BaseLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <BaseLayout /> }>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/error" element = { <Error /> } />
          <Route path = "/games" element = { <ViewGameAll /> } />
          <Route path = "/games/:gameId" element={<ViewGameDetails />} />
          <Route path = "/stores" element={<ViewStoreAll />} />
          <Route path = "/stores/:storeId" element={<ViewStoreDetails />} />
          <Route path = "/creators" element = { <ViewCreatorAll />} />
          <Route path = "/about"  element = { <ViewAboutUs/> } />
<<<<<<< HEAD
          <Route path = "/sidebar"  element = { <ViewSidebar/> } />
=======
>>>>>>> ae63101a402fd85dacd7795440c348dd2d7dd7a5
          <Route path = "*" element = { <Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
