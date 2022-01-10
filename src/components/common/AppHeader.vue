<template>
  <header>
    <div>
      <router-link to="/" class="logo"> Board </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <span class="user-email">{{ $store.state.email }}</span>
        <a href="javascript:;" @click="logoutUser" class="logout-button">Logout</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      console.log(this.$store.getters.isLogin);
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUserEmail");
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #beb1fc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
.user-email {
  color: white;
  font-size: 14px;
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.logout-button {
  font-size: 14px;
}
</style>
