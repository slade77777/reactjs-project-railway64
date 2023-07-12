import {memo, useEffect, useState} from "react";
import styled from "styled-components";

const Content = () => {
  console.log('content componet is render')
  return <div> this is content </div>
}

const ContentStyled = styled(Content)`
  color: white;
  font-weight: bold;
  font-size: 40px;
  background-color: #535bf2;
`

const Calculate = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  function generateNumber() {
    const newNumber = Math.round(Math.random() * 100);
    setRandomNumber(newNumber)
  }

  useEffect(() => {
    generateNumber();
  }, [])

  return <Container>
    <div><button onClick={generateNumber}>random number</button></div>
    <Paragraph>X: {randomNumber}</Paragraph>
    <Paragraph inputColor="blue">2 * X: {randomNumber * 2}</Paragraph>
    <Paragraph inputColor="white">3 * X: {randomNumber * 3}</Paragraph>
    <ContentStyled />
  </Container>
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`

const Paragraph = styled.p<{ inputColor?: string; }>`
  color: ${props => props.inputColor || 'red'};
  font-size: 30px;
`


export default Calculate;
