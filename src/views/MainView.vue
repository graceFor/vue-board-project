<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">전체 포스트</h1>
      <loading-spinner v-if="isLoading"></loading-spinner>
      <ul v-else>
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
import LoadingSpinner from "../components/common/LoadingSpinner.vue";
import { fetchPosts } from "../api/index";
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },

  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.data.list;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
