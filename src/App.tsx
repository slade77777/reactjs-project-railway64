import './App.css'
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required().max(6, 'this field is too long'),
  nickname: yup.string().required().max(10) ,
}).required();

function App() {
  const { register, handleSubmit, watch, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    console.log(data)
  }

  console.log(123, errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container'>
      <label className="title">Name: </label>
      <input {...register('name')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
      <p style={{color: 'red'}}>{errors.name?.message}</p>

      <label className="title">nickname: </label>
      <input {...register('nickname')} type='text' style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}} />
      <p style={{color: 'red'}}>{errors.nickname?.message}</p>
      <input type="submit" />
    </div>
    <div id="outside-div"></div>
    </form>
  )
}

export default App
