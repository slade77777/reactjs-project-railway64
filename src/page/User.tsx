import '../App.css'
import {useContext} from "react";
import {AppContext} from "../App.tsx";
const User = () => {

  const dataContext = useContext(AppContext);
  console.log(dataContext);
  return <div className='container'>
    <p className='title'>
      User's information:
    </p>
    <div className='title'>Password: {dataContext?.user?.password}</div>
  </div>
}

export default User
