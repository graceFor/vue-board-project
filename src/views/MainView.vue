<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">전체 포스트</h1>
      <ul>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem.seq"
          :postItem="postItem"
        ></post-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from "../components/boards/BoardListItem.vue";
import { fetchPosts } from "../api/index";
export default {
  components: {
    PostListItem,
  },

  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.data.list;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
