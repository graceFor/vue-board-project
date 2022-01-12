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
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    isContentValid() {
      return this.content.length <= 200;
    },
  },
  methods: {
    submitForm() {},
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
