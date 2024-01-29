<template>
  <flat-pickr
      :value="modelValue"
      :config="config"
      class="form-control todo-content"
      name="date"
      @change="$emit('update:modelValue', $event.target.value)"
  />
  <button class="btn btn-default" type="button" title="Toggle" data-toggle>
    <span aria-hidden="true" class="sr-only">
<i class="bi bi-calendar3"></i>
    </span>
  </button>
</template>

<script setup>
import {ref} from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
const config = ref({
  wrap: true,
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
  minDate: '2024-01-26'
})

defineProps(['modelValue'])
</script>
