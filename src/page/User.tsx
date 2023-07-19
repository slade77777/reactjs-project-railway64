import '../App.css'
import {Container} from "./Calculate.tsx";
import {useParams} from "react-router-dom";
import {getUserDetail} from "../services/user-api.ts";
import useFetchData from "../hooks/useFetchData.ts";
import UserForm from "../components/UserForm.tsx";

const User = () => {

  const params = useParams();
  const userId = params.id;
  const { data } = useFetchData(getUserDetail, userId)
  console.log(data);
  return <Container>
    <p className='title'>
      User's information:
    </p>
    {data && <UserForm user={data} />}
  </Container>
}

export default User
