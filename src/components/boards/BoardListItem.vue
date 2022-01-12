<template>
  <li @click="routerBoardPage">
    <div class="post-title">{{ boardItem.title }}</div>
    <div class="post-contents">{{ boardItem.content }}</div>
    <div class="post-time">{{ boardItem.createDate }}</div>
  </li>
</template>

<script>
import Board from "../../views/BoardView.vue";

export default {
  components: {
    Board,
  },
  props: {
    boardItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routerBoardPage() {
      const id = this.boardItem.seq;
      this.$router.push(`/board/${id}`);
    },
  },
};
</script>

<style></style>
