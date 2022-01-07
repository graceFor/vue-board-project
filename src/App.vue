<template>
  <div id="app">
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->

    <board-login></board-login>
    <board-sign-up></board-sign-up>
    <board-write></board-write>
  </div>
</template>

<script>
import BoardLogin from "./components/auth/BoardLogin.vue";
import BoardSignUp from "./components/auth/BoardSignUp.vue";
import BoardWrite from "./components/write/BoardWrite.vue";

export default {
  components: {
    BoardLogin,
    BoardSignUp,
    BoardWrite,
  },
  props: {},
};
</script>

<style></style>
