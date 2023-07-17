import {useEffect, useState} from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm.tsx";
import {getUserList} from "../services/user-api.ts";

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
    getUserList().then((response) => {
      setUserList(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getListUser();
  }, [])

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UserForm updateList={getListUser} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full border-l-2 border-white border-solid">
        {
          userList.map((item, index) => <UserItem user={item} key={index}/>)
        }
      </div>
    </div>
  )
}

const Item = styled.div`
  margin: 10px;
  border: 1px solid white;
  padding: 10px;
`

export default UserList;
