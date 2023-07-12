import {memo, useEffect, useState} from "react";

const Content = memo(({number}: {number: number}) => {
  console.log('content componet is render')
  return <p className="title"> this is content </p>
})

const Calculate = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  function generateNumber() {
    const newNumber = Math.round(Math.random() * 100);
    setRandomNumber(newNumber)
  }

  useEffect(() => {
    generateNumber();
  }, [])

  return <div>
    <div><button onClick={generateNumber}>random number</button></div>
    <p className="title">X: {randomNumber}</p>
    <p className="title">2 * X: {randomNumber * 2}</p>
    <p className="title">3 * X: {randomNumber * 3}</p>
    <Content number={randomNumber} />
  </div>
}


export default Calculate;
