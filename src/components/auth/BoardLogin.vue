<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div class="form-header">LOGIN</div>
        <div>
          <label for="email">email </label>
          <input id="email" type="email" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email"> 이메일 형식으로 입력하세요 </span>
          </p>
        </div>
        <div>
          <label for="password">password </label>
          <input id="password" type="password" v-model="password" />
          <p class="validation-text">
            <span class="warning" v-if="!isPasswordValid && password">
              비밀번호는 8~10자리입니다
            </span>
          </p>
        </div>
        <button
          :disabled="!isPasswordValid || !password || !email || !isEmailValid"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { loginUser } from "../../api/index";
import { validateEmail } from "../../utils/validation";

export default {
  data() {
    return {
      email: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
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
        this.$store.commit("setToken", data.data.accessToken);
        this.$store.commit("setUserEmail", this.email);
        // 메인페이지로 이동
        this.$router.push("/main");
      } catch (error) {
        this.logMessage = `이메일 또는 비밀번호의 정보가 옳바르지 않습니다`;
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

<style>
.btn {
  color: white;
}
</style>
