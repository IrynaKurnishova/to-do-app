<template>
  <div class="alert-container">
    <div v-if="successAlert" class="alert alert-success" role="alert">
      Task {{ alertText }} successfully
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

 defineProps({
  alertText: String,
  successAlert: Boolean,
})

</script>

<style scoped>
.alert-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  width: 300px;
}

.alert {
  width: 100%;
  margin-bottom: 10px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.alert.fade-out {
  opacity: 0;
}
</style>
