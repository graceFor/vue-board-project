<template>
  <div class="contents">
    <h1 class="page-header">Edit Board</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="content">Contents</label>
          <textarea id="content" type="text" rows="6" v-model="content" />
          <p v-if="!isContentValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchBoard, editBoard } from "../../api/boards";
export default {
  data() {
    return {
      title: "",
      content: "",
      logMessage: "",
    };
  },
  computed: {
    isContentValid() {
      return this.content.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      console.log(id);
      try {
        await editBoard(id, {
          title: this.title,
          content: this.content,
        });
        this.$router.push("/main");
      } catch (error) {
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchBoard(id);
    this.title = data.data.title;
    this.content = data.data.content;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
