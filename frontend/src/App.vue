<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: 'Hello worldddd'
    };
  }
});
</script>
