import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const data = [
  {
    category: 'Sporting goods',
    items: [
      {
        name: 'football',
        price: 23
      },
      {
        name: 'baseball',
        price: 28
      },
      {
        name: 'basketball',
        price: 30
      }
    ]
  },
  {
    category: 'Electronics',
    items: [
      {
        name: 'ipod',
        price: 500
      },
      {
        name: 'iphone',
        price: 5000
      },
      {
        name: 'nexus',
        price: 2000
      }
    ]
  }
];

function Product({name, price}: {name: string, price: number}) {
  return <div>
    <p>{name} {price}</p>
  </div>
}

function Category({name, listItem}: {name: string, listItem: Array<any>}) {
  console.log(name)
  console.log(listItem)
  return <div>
    <div style={{ border: '1px solid blue', width: 200, marginTop: 20}}>
      <p>{name}</p>
      {
        listItem.map((item, index) => <Product  name={item.name} price={item.price} key={index}/>)
      }
    </div>
  </div>
}
function App() {
  return (
    <div>
      {
        data.map((cate, index) => <Category  key={index}  listItem={cate.items} name={cate.category} />)
      }
    </div>
  )
}

export default App
