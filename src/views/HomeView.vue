<template>
  <div>
    <SearchBar @search="performSearch" />
    <PhotoGrid :photos="photos" @photoClick="openModal" />
    <ImageModal
      v-if="selectedPhoto"
      :photo="selectedPhoto"
      @close="closeModal"
    />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import PhotoGrid from "../components/PhotoGrid.vue";
import ImageModal from "../components/ImageModal.vue";
import { fetchPhotos } from "../services/unsplashApi";

export default {
  components: {
    SearchBar,
    PhotoGrid,
    ImageModal,
  },
  data() {
    return {
      photos: [],
      selectedPhoto: null,
    };
  },
  async created() {
    this.photos = await fetchPhotos();
  },
  methods: {
    async performSearch(query) {
      this.photos = await fetchPhotos(query);
    },
    openModal(photo) {
      this.selectedPhoto = photo;
    },
    closeModal() {
      this.selectedPhoto = null;
    },
  },
};
</script>
