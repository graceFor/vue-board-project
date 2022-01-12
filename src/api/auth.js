// 회원 관련 API
import { instance } from "./index";

// 회원가입 API
function registerUser(userData) {
  return instance.post("auth/signup", userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post("auth/login", userData);
}

export { registerUser, loginUser };
