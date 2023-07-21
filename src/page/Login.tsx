import {Container} from "./Calculate.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {login} from "../actions/userActions.ts";
import {useDispatch} from "react-redux";
import {loginApi} from "../services/user-api.ts";

const schema = yup.object({
  name: yup.string().required(),
  password: yup.string().min(6).max(20),
}).required();


const Login = () => {
  const { register, handleSubmit, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(data: any) {
    const userData = {
      name: data.name,
      password: data.password
    }
    loginApi(data.name).then((res) => {
      if (res.data?.length > 0) {
        dispatch(login(userData))
        navigate('/user-list')
      } else {
        alert('dang nhap khong thanh cong')
      }
    }).catch(e => {
      alert('dang nhap khong thanh cong')
    })

  }

  return <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="title w-40">Name: </p>
      <input type='text' {...register('name')}  style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
      <p></p>
      <p className="title w-40">Password: </p>
      <input {...register('password')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
      <p style={{color: 'red'}}>{errors.password?.message}</p>

      <p className="title w-40">Confirm password: </p>
      <input className="ml-16 p-4 mt-8 border-2 border-solid border-white rounded-md cursor-pointer" type="submit" />
    </form>
  </Container>
}

export default Login
