import "./styles/main.scss";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";
import AppRouterOutside from "./routers/AppRouterOutside";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, {useEffect, useState} from "react";

function App() {

  const user = false

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
