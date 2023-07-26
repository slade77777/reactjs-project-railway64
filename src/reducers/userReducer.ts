import {LOGIN_ACTION, LOGIN_ACTION_FAIL, LOGIN_ACTION_SUCCESS} from "../actions/userActions.ts";

const initialData = {
  name: '',
  age: '',
  password: '',
  isSubmitting: false
}

function userReducer(state = initialData, action: any) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        isSubmitting: true
      }
    case LOGIN_ACTION_SUCCESS:
      return {
        name: action.payload.name,
        password: action.payload.password,
        isSubmitting: false
      }
    case LOGIN_ACTION_FAIL:
      return {
        name: '',
        password: '',
        isSubmitting: false
      }
    default:
      return state;
  }
}

export default userReducer;
