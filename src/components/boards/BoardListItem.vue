<template>
  <li>
    <div class="post-title">{{ boardItem.title }}</div>
    <div class="post-contents">{{ boardItem.content }}</div>
    <div class="post-time">{{ boardItem.createDate }}</div>
  </li>
</template>

<script>
export default {
  props: {
    boardItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
