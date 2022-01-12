<template>
  <div class="main">
    {{ title }}
    <ion-icon name="pencil-outline" @click="routerEditPage"></ion-icon>
    <ion-icon name="trash-outline" @click="deleteItem"></ion-icon>
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
    };
  },
  methods: {
    routerEditPage() {
      this.$router.push(`/post/edit/${this.id}`);
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
    console.log(data.data);
  },
};
</script>

<style></style>
