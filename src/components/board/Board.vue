<template>
  <div class="list-container">
    <div class="page-header">
      {{ title }}
    </div>
    <div class="content">
      {{ content }}
    </div>
    <div class="icon" v-if="isOwner">
      <ion-icon name="pencil-outline" @click="routerEditPage"></ion-icon>
      <ion-icon name="trash-outline" @click="deleteItem"></ion-icon>
    </div>
  </div>
</template>

<script>
import { deleteBoard, fetchBoard } from "../../api/boards";
export default {
  data() {
    return {
      title: "",
      content: "",
      isLoading: false,
      id: this.$route.params.id,
      isOwner: false,
    };
  },
  computed: {
    async isOwn() {
      const { data } = await fetchBoard(this.id);
      if (data.data.memberemail === this.$store.state.email) {
        return !this.isOwner;
      }
      return;
    },
  },
  methods: {
    routerEditPage() {
      this.$router.push(`/board/edit/${this.id}`);
    },
    async deleteItem() {
      await deleteBoard(this.id);
      this.$emit("refresh");
      this.$router.push("/main");
      console.log("delete");
    },
  },
  async created() {
    const { data } = await fetchBoard(this.id);
    this.title = data.data.title;
    this.content = data.data.content;
    //console.log(data.data);
    console.log(this.$store.state.email);
  },
};
</script>

<style scoped>
.page-header {
  border-bottom: solid 3px gainsboro;
  padding: 1rem;
  margin-bottom: 3rem;
  font-size: 3rem;
  line-height: 1.5;
  margin: 0;
}
.wrapper {
  max-width: 500px;
  background: white;
}
.content {
  font-size: 2rem;
  padding: 1.5rem;
  line-height: 1.5;
  margin: 0;
}
.main {
  background: white;
}
</style>
