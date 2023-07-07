import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../App.tsx";

const schema = yup.object({
  password: yup.string().min(6).max(20),
  confirmPassword: yup.string().oneOf([yup.ref('password')])
}).required();

const UserForm = () => {
  const { register, handleSubmit, watch, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema)
  });
  const dataContext = useContext<any>(AppContext);
  const navigate = useNavigate();
  console.log(dataContext);

  function onSubmit(data: any) {
    dataContext?.changeUser({password: data.password});
    navigate(`/user`)
  }

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="title">Password: </label>
        <input {...register('password')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
        <p style={{color: 'red'}}>{errors.password?.message}</p>

        <label className="title">Confirm password: </label>
        <input {...register('confirmPassword')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}} />
        <p style={{color: 'red'}}>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </div>
      <div id="outside-div"></div>
    </form>
  </div>
}

export default UserForm;
