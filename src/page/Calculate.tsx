import {useEffect, useState} from "react";

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
  </div>
}

export default Calculate;
