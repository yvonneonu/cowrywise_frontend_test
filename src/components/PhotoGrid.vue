<template>
  <div class="photo-grid">
    <div
      class="photo-item"
      v-for="photo in photos"
      :key="photo.id"
      @click="handlePhotoClick(photo)"
    >
      <img :src="photo.urls.small" :alt="photo.alt_description" />
      <div class="photo-info">{{ photo.user.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photos: Array,
  },
  methods: {
    handlePhotoClick(photo) {
      this.$emit("photoClick", photo);
    },
  },
};
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px;
  padding: 40px;
  border-radius: 20px;
}

.photo-item {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.photo-item img {
  width: 100%;
  height: auto;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.3s ease;
  flex-grow: 1;
}

.photo-info {
  text-align: center;
  padding-top: 10px;
  position: relative;
  margin-top: auto;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.photo-item img {
  transition: transform 0.3s ease;
}
.photo-item:hover img {
  transform: scale(1.05);
}
</style>
