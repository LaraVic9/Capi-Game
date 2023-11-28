import "./styles/main.scss";
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import AppRouterOutside from "./routers/AppRouterOutside";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, {useEffect, useRef, useState} from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll, ViewAboutUs, ViewSidebar } from './views/index';

import BaseLayout from "./layouts/BaseLayout";

function App() {

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
  
            <Route path = "/genres"  element = { <ViewSidebar/> } />
  
  
            <Route path = "*" element = { <Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

  const [user, setUser] = useState(null);
  const auth = getAuth();
  
  const ref = useRef()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

    
    });

    // Certifique-se de cancelar a assinatura quando não for mais necessário
    return () => unsubscribe();
  }, [auth]);

  console.log('opa, está fora');
  const isAuthenticated = !!user;

  return (
    <div className="App">
      {user ? (
        <Provider store={store}>
          <AppRouter />
        </Provider>
      ) : (
        <AppRouterOutside />
      )}
    </div>
  );
}

export default App
