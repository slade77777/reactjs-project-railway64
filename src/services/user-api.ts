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

export async function updateUser(data: any, userId: string) {
  return axios.put('https://645644b92e41ccf16918360b.mockapi.io/user/' + userId, data)
}

export async function loginApi(name: string) {
  return axios.get('https://645644b92e41ccf16918360b.mockapi.io/user/', { params: {name: name}})
}
