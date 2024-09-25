<template>
  <div class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <img :src="photo.urls.full" :alt="photo.alt_description" />
      <div class="modal-text">
        <h2 class="description">{{ photo.alt_description }}</h2>
        <p class="author">Photo by: {{ photo.user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: Object,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 75%;
  overflow: hidden;
}

.modal-content img {
  width: 100%;
  object-fit: cover;
  max-height: 80%;
}

.modal-text {
  padding: 10px;

  color: hsl(0, 0%, 0%);

  text-transform: capitalize;
}

.description {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.2rem;
}

.author {
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0.2rem;
}

.modal {
  transition: opacity 0.3s ease;
  opacity: 0;
  display: none;
}
.modal.active {
  display: block;
  opacity: 1;
}
</style>
