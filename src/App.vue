<template>
  <div id="app" >
    <b-container>
      <div id="nav">
        <BaseLayout></BaseLayout>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
  .loader{
    display: flex;
  }
</style>

<script>
import BaseLayout from '@/components/layouts/BaseLayout.vue'

export default {
  components: {
    BaseLayout
  }
}
</script>

