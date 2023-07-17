import {useEffect, useState} from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm.tsx";
import {getUserList} from "../services/user-api.ts";
import {Link} from "react-router-dom";
import useFetchData from "../hooks/useFetchData.ts";

export type UserType = {name: string, password: string, id: string}

const UserItem = ({user}: {user: UserType}) => {
  return <Link to={`/user/${user.id}`}><Item >
    <p>Name: {user.name}</p>
    <p>Password: {user.password}</p>
  </Item></Link>
}

const UserList = () => {
  const { data } = useFetchData(getUserList)

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UserForm updateList={getUserList} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full border-l-2 border-white border-solid">
        {
          data?.map((item, index) => <UserItem user={item} key={index}/>)
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
