<script setup lang="ts">
defineProps({
  companyName: {
    type: String,
    required: true,
  },
});

/**
 * Obtain the current year.
 */
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content rounded-box">
    <div>
      <p>Copyright © {{ currentYear }} - All right reserved by {{ companyName }}</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
