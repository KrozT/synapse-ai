<script setup lang="ts">
import NavBar from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { usePlatformStore } from '@/stores/platformStore';

/**
 * Obtain the app name and company name from the environment variables.
 * If they are not defined, use the default values.
 */
const appName: string = import.meta.env.SYNAPSE_APP_NAME || 'Synapse';
const companyName: string = import.meta.env.SYNAPSE_COMPANY_NAME || 'ACME Industries Ltd.';

/**
 * Initialize the platform store.
 * This will be used to obtain the platform info on another components using the usePlatformStore hook.
 */
const platformStore = usePlatformStore();
platformStore.definePlatform(appName, companyName);
</script>

<template>
  <div class="min-h-screen max-h-screen flex flex-col p-6">
    <!-- Navbar -->
    <nav-bar :app-name="appName" />
    <!-- Main content -->
    <router-view class="flex-auto my-6" />
    <!-- Footer -->
    <footer-component :company-name="companyName" />
  </div>
</template>

<style scoped>

</style>
