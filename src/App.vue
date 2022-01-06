<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <board-login></board-login>
    <board-register></board-register>
  </div>
</template>

<script>
import BoardLogin from "./components/auth/BoardLogin.vue";
import BoardRegister from "./components/auth/BoardRegister.vue";

export default {
  components: {
    BoardLogin: BoardLogin,
    BoardRegister: BoardRegister,
  },
};
</script>

<style></style>
