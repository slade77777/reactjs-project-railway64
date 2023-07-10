import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import React, {useState} from "react";
import User from "./page/User.tsx";
import Calculate from "./page/Calculate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/calculate",
    element: <Calculate />
  }
]);

export const AppContext = React.createContext(undefined);

function App() {
  const [data, setData] = useState<any>({ name: 'cuong' })

  return (
    <AppContext.Provider value={{user: data, changeUser: setData}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
