<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div class="form-header">SIGNUP</div>
        <div>
          <label for="name">이름 </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div>
          <label for="email">이메일 </label>
          <input id="email" type="email" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email"> 이메일 형식으로 입력하세요 </span>
          </p>
        </div>
        <div>
          <label for="password">비밀번호 </label>
          <input id="password" type="password" v-model="password" />
          <p class="validation-text">
            <span class="warning" v-if="!isPasswordValid && password">
              비밀번호는 8~10자리입니다
            </span>
          </p>
        </div>
        <div>
          <label for="city">시 </label>
          <input id="city" type="text" v-model="city" />
        </div>
        <div>
          <label for="street">도로명 </label>
          <input id="street" type="text" v-model="street" />
        </div>
        <div>
          <label for="zipcode">우편번호 </label>
          <input id="zipcode" type="text" v-model="zipcode" />
        </div>
        <button
          :disabled="
            !isPasswordValid ||
            !password ||
            !email ||
            !name ||
            !city ||
            !street ||
            !zipcode ||
            !isEmailValid
          "
          type="submit"
          class="btn"
        >
          회원가입
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../../api/index";
import { validateEmail } from "../../utils/validation";

export default {
  data() {
    return {
      //form values
      name: "",
      email: "",
      password: "",
      city: "",
      street: "",
      zipcode: "",

      // log
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
      const UserData = {
        name: this.name,
        email: this.email,
        password: this.password,
        city: this.city,
        street: this.street,
        zipcode: this.zipcode,
      };
      await registerUser(UserData);
      //console.log(response);
      this.logMessage = `${this.name}님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.city = "";
      this.street = "";
      this.zipcode = "";
    },
  },
};
</script>

<style></style>
