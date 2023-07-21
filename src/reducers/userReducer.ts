import {LOGIN_ACTION} from "../actions/userActions.ts";

const initialData = {
  name: '',
  age: '',
  password: ''
}

function userReducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        name: action.payload.name,
        password: action.payload.password
      }
    default:
      return state;
  }
}

export default userReducer;
