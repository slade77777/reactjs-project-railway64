import axios from "axios";

export async function getUserList() {
  return axios.get('https://645644b92e41ccf16918360b.mockapi.io/user')
}

export async function createUser(data: any) {
  return axios.post('https://645644b92e41ccf16918360b.mockapi.io/user', data)
}

export async function getUserDetail(id: string) {
  return axios.get('https://645644b92e41ccf16918360b.mockapi.io/user/' + id)
}
