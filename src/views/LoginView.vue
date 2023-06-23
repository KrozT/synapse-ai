<script setup lang="ts">

</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="card bg-base-300 md:w-full xl:w-fit">
      <div class="card-body">
        <div class="space-y-4">
          <input type="email" placeholder="Email" class="input w-full" />
          <input type="password" placeholder="Password" class="input w-full" />
        </div>
        <button class="btn btn-primary btn-block mt-4">
          Log In
        </button>
        <button class="btn btn-link text-primary-content/70">
          Forgot Password?
        </button>
        <div class="divider"></div>
        <div class="card-actions justify-center">
          <button class="btn btn-success btn-wide">Create new Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
