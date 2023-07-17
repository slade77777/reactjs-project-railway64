import '../App.css'
import {Container} from "./Calculate.tsx";
import {useParams} from "react-router-dom";
import {getUserDetail} from "../services/user-api.ts";
import useFetchData from "../hooks/useFetchData.ts";

const User = () => {

  const params = useParams();
  const userId = params.id;
  const { data } = useFetchData(getUserDetail, userId)

  return <Container>
    <p className='title'>
      User's information:
    </p>
    <div className='title'>Name: {data?.name}</div>
    <div className='title'>Password: {data?.password}</div>
  </Container>
}

export default User
