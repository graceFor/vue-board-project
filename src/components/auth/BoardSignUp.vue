<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">이름: </label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="email">이메일: </label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="city">시: </label>
      <input id="city" type="text" v-model="city" />
    </div>
    <div>
      <label for="street">도로명: </label>
      <input id="street" type="text" v-model="street" />
    </div>
    <div>
      <label for="zipcode">우편번호: </label>
      <input id="zipcode" type="text" v-model="zipcode" />
    </div>
    <button
      :disabled="!isPasswordValid || !password || !email || !name || !city || !street || !zipcode"
      type="submit"
    >
      회원가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from "../../api/index";
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
