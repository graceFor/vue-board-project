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
          @refresh="fetchData"
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
import { fetchBoards } from "../api/boards";
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
      const { data } = await fetchBoards();
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
