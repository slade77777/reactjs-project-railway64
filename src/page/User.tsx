import '../App.css'
import {useContext} from "react";
import {AppContext} from "../App.tsx";
import {Container} from "./Calculate.tsx";
const User = () => {

  const dataContext = useContext(AppContext);
  return <Container>
    <p className='title'>
      User's information:
    </p>
    <div className='title'>Password: {dataContext?.user?.password}</div>
  </Container>
}

export default User
