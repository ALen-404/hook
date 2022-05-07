import axios from 'axios'

// const DefaultUrl = 'https://api.hook.cool'
const DefaultUrl = 'https://192.168.31.23:8898'

export async function register(params) {
  return await axios.post(`${DefaultUrl}/user/register`, {
    ...params,
  })
}
export async function getUser(params) {
  return await axios.post(`${DefaultUrl}/user/getUser`, {
    ...params,
  })
}
export async function setUserAddress(params) {
  return await axios.post(`${DefaultUrl}/user/setAddress`, {
    ...params,
  })
}
export async function setUpdataLoginPwdByCode(params) {
  return await axios.post(`${DefaultUrl}/user/updataLoginPwdByCode`, {
    ...params,
  })
}
export async function setUpdataLoginPwdByPwd(params) {
  return await axios.post(`${DefaultUrl}/user/updataLoginPwdByPwd`, {
    ...params,
  })
}
export async function setUpdataUser(params) {
  return await axios.post(`${DefaultUrl}/user/updataUser`, {
    ...params,
  })
}
export async function isLogin() {
  return await axios.get(`${DefaultUrl}/user/isLogin`)
}

export async function loginByCode(params) {
  return await axios.post(`${DefaultUrl}/user/loginByCode`, {
    ...params,
  })
}

export async function loginByPwd(params) {
  return await axios.post(`${DefaultUrl}/user/loginByPwd`, {
    ...params,
  })
}
export async function logout(params) {
  return await axios.post(`${DefaultUrl}/user/logout`, {
    ...params,
  })
}
