import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// 회원가입
function registerUser(userData) {
  return instance.post("auth/signup", userData);
}

// 로그인
function loginUser(userData) {
  return instance.post("auth/login", userData);
}

export { registerUser, loginUser };
