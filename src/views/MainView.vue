<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">전체 포스트</h1>
      <loading-spinner v-if="isLoading"></loading-spinner>
      <ul v-else>
        <board-list-item
          v-for="boardItem in BoardListItems"
          :key="boardItem.seq"
          :boardItem="boardItem"
        ></board-list-item>
      </ul>
    </div>
    <router-link to="/add" class="create-button"
      ><ion-icon name="add-outline"></ion-icon>
    </router-link>
  </div>
</template>

<script>
import BoardListItem from "../components/boards/BoardListItem.vue";
import LoadingSpinner from "../components/common/LoadingSpinner.vue";
import { fetchPosts } from "../api/index";
export default {
  components: {
    BoardListItem,
    LoadingSpinner,
  },

  data() {
    return {
      BoardListItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.BoardListItems = data.data.list;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
