import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
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
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [second, setSecond] = useState(0);

  useEffect(() => {
    // alert('component is mounting')
    if (name.length > 10) {
      alert('Name is too long')
    }
    if (Number(age) > 70) {
      alert('Age is too old')
    }
  }, [name, age])

  function handleMouse() {
    console.log(123);
    setSecond(0)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouse)

    return () => {
      document.removeEventListener('mousemove',handleMouse)
    }
  }, [])

  useEffect(() => {
    setInterval(() => {
        setSecond(time => time + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (second === 20) {
      alert('ban con trong nay khong?')
      setSecond(0)
    }
  }, [second])

  console.log(second)

  function onSubmit(data: any) {
    dataContext?.changeUser({password: data.password});
    navigate(`/user`)
  }

  return <div>
    <div>
      <p className="title">you are looking in this page for {second} seconds</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="title">Name: </label>
        <input type='text' onChange={(e) => setName(e.target.value)}  style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
        <p></p>
        <label className="title">Age: </label>
        <input type='number' onChange={(e) => setAge(e.target.value)}  style={{ backgroundColor: 'white', width: 200, height: 50, color: 'black'}}/>
        <p></p>
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
