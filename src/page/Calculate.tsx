import {createContext, memo, useContext, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {words} from "../lang.ts";

const ContentDetail = () => {
  const locale = useContext(LocaleContext)
  return <p>{locale === 'vi' ? 'Đây là nội dung chi tiết' :  'this is detail content'}</p>
}

const Content = () => {
  const locale = useContext(LocaleContext)
  return <div>
    <p>{words[locale].content}</p>
    <ContentDetail />
  </div>
}

const ContentStyled = styled(Content)`
  color: white;
  font-weight: bold;
  font-size: 40px;
  background-color: #535bf2;
`

const LocaleContext = createContext<'vi' | 'en'>('vi');

const Calculate = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [locale, setLocale] = useState<'vi' | 'en'>('vi')

  function generateNumber() {
    const newNumber = Math.round(Math.random() * 100);
    setRandomNumber(newNumber)
  }

  useEffect(() => {
    generateNumber();
  }, [])

  function changeLanguage() {
    setLocale(locale === 'vi' ? 'en' : 'vi');
  }

  // complicated calculate
  const doubleNumber = useMemo(() => {
    console.log('tinh toan lai')
    return randomNumber * 2
  }, [randomNumber])

  return (
    <LocaleContext.Provider value={locale}>
      <Container>
        <p>{locale === 'vi' ? 'ngôn ngữ đang sử dụng' : 'Language'}: {locale === 'vi' ? 'Tiếng việt' : 'English'}</p>
        <Button onClick={changeLanguage}>{locale === 'vi' ? 'đổi sang tiếng anh' : 'change to Vietnamese'}</Button>
        <div><button onClick={generateNumber}>{locale === 'vi' ? 'Tạo số ngẫu nhiên' : 'Generate random number'}</button></div>
        <p className="text-red-600 font-bold my-4">X: {randomNumber}</p>
        <p className="text-red-600 font-bold my-4">Complicated result: {doubleNumber}</p>
        <ContentStyled />
      </Container>
    </LocaleContext.Provider>
  );
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

const Button = styled.button`
  margin: 10px;
`


export default Calculate;
