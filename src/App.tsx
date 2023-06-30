import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Person({name, age, yob}: {name: string, age: number, yob: number}) {
  return <div>
    <p>Ten: {name}</p>
    <p>Tuoi: {age}</p>
    <p>Nam sinh: {yob}</p>
  </div>
}
function App() {

  const listPerson = [
    {
      name: 'nguyen van A',
      tuoi : 19,
      yob: 1994
    },
    {
      name: 'nguyen van B',
      tuoi : 23,
      yob: 1997
    },
    {
      name: 'nguyen van C',
      tuoi : 29,
      yob: 1990
    },{
      name: 'nguyen van D',
      tuoi : 32,
      yob: 1954
    }
  ]
  return (
    <div>
      {
        listPerson.map((person, index) => <Person name={person.name} age={person.tuoi} yob={person.yob} key={index} />)
      }
    </div>
  )
}

export default App
