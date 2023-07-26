import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import User from "./page/User.tsx";
import Calculate from "./page/Calculate.tsx";
import UserList from "./page/UserList.tsx";
import {Provider} from 'react-redux';
import store from "./store";
import Login from "./page/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <User />
  },
  {
    path: "/calculate",
    element: <Calculate />
  },
  {
    path: '/user-list',
    element: <UserList />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
