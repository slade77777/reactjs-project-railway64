import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {createUser} from "../services/user-api.ts";

const schema = yup.object({
  name: yup.string().required(),
  password: yup.string().min(6).max(20),
  confirmPassword: yup.string().oneOf([yup.ref('password')])
}).required();

const UserForm = ({ updateList } : { updateList: () => void }) => {
  const { register, handleSubmit, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema)
  });

  async function onSubmit(data: any) {
    const userData = {
      name: data.name,
      password: data.password
    }
    try {
      await createUser(userData);
      updateList();
    } catch (e) {
      console.log(e)
    }
  }

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="title w-40">Name: </p>
        <input type='text' {...register('name')}  style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
        <p></p>
        <p className="title w-40">Password: </p>
        <input {...register('password')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
        <p style={{color: 'red'}}>{errors.password?.message}</p>

        <p className="title w-40">Confirm password: </p>
        <input {...register('confirmPassword')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}} />
        <p style={{color: 'red'}}>{errors.confirmPassword?.message}</p>
        <input className="ml-16 p-4 mt-8 border-2 border-solid border-white rounded-md cursor-pointer" type="submit" />
      </div>
      <div id="outside-div"></div>
    </form>
  </div>
}

export default UserForm;
