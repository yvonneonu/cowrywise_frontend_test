<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for photos..."
    />
    <button @click="submitSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    submitSearch() {
      this.$emit("search", this.searchQuery);
      this.$emit("loading", true);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: 5px;
}
input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
}
button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
