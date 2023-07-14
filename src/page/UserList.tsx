import {Container} from "./Calculate.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

type User = {name: string, password: string}

const UserItem = ({user}: {user: User}) => {
  return <Item >
    <p>Name: {user.name}</p>
    <p>Password: {user.password}</p>
  </Item>
}

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([])
  function getListUser() {
    axios.get('https://645644b92e41ccf16918360b.mockapi.io/user').then((response) => {
      setUserList(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getListUser();
  }, [])

  return <Container>
    {
      userList.map((item, index) => <UserItem user={item} key={index}/>)
    }
  </Container>
}

const Item = styled.div`
  margin: 10px;
  border: 1px solid white;
  padding: 10px;
`

export default UserList;
