import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// axios 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post("auth/signup", userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post("auth/login", userData);
}

// 전체 조회 API
function fetchPosts() {
  return instance.get("board/all");
}

// post 작성 API
function createPost(postData) {
  return instance.post("board/", postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
