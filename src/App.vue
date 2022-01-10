<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
export default {
  components: { AppHeader },
  props: {},
};
</script>

<style></style>
