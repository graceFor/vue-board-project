// Board 조작과 관련된 CRUD API
import { boards } from "./index";

// 전체 조회 API
function fetchBoards() {
  return boards.get("/all");
}

// 특정 board 조회 API
function fetchBoard(id) {
  return boards.get(id);
}

// board 작성 API
function createPost(postData) {
  return boards.post("/", postData);
}

// board 수정 API
function editBoard(id, postData) {
  return boards.put(id, postData);
}

// board 삭제 API
function deleteBoard(id) {
  return boards.delete(id);
}
export { fetchBoards, createPost, fetchBoard, deleteBoard, editBoard };
