import {Container} from "./Calculate.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {login} from "../actions/userActions.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

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
  const storeData = useSelector(state => state.user);
  const username = storeData.name;
  const isLoading = storeData.isSubmitting;

  async function onSubmit(data: any) {
    const userData = {
      name: data.name,
      password: data.password
    }
    dispatch(login(userData))
  }

  useEffect(() => {
    if (username && username != '') {
      navigate('/user-list')
    }
  }, [username])

  return <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        isLoading && <p className="text-bold text-white text-4xl">Submitting</p>
      }
      <p className="title w-40">Name: </p>
      <input type='text' {...register('name')}  style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
      <p></p>
      <p className="title w-40">Password: </p>
      <input {...register('password')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
      <p style={{color: 'red'}}>{errors.password?.message}</p>

      <input className="ml-16 p-4 mt-8 border-2 border-solid border-white rounded-md cursor-pointer" type="submit" />
    </form>
  </Container>
}

export default Login
