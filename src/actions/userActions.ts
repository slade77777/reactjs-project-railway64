export const LOGIN_ACTION = 'LOGIN_ACTION';

export function login(data: { name: string, password: string }) {
  console.log(data);
  return {
    type: LOGIN_ACTION,
    payload: data
  }
}
