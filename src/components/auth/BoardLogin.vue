<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">이메일: </label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">비밀번호: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button :disabled="!isPasswordValid || !password || !email" type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "../../api/index";
export default {
  data() {
    return {
      email: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    isPasswordValid() {
      if (this.password.length >= 8 && this.password.length <= 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        const accessToken = data.data.accessToken;
      } catch (error) {
        console.log(error.response.data);
        this.logMessage;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
