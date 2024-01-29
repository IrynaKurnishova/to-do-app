<template>
  <section class="create-todo">
    <h4>CREATE A TODO</h4>

    <form @submit.prevent="addTask">
      <h5>What's on your tasks list?</h5>
      <input
          type="text"
          placeholder="make a task name"
          v-model="inputContent"
      />
      <textarea
          type="text"
          placeholder="make a description"
          v-model="descriptionContent"
      />
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="submit">Add task</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from "vuex"
const store = useStore()
const inputContent = ref('')
const descriptionContent = ref('')
const emit = defineEmits(['taskCreated'])

const addTask =  async () => {
  if (inputContent.value === '' || descriptionContent.value === '') {
    return
  }
 await store.dispatch(
      'createTask', {
        name : inputContent.value.trim(),
        description: descriptionContent.value.trim()
      })
  emit('taskCreated')
  inputContent.value = ''
  descriptionContent.value = ''
}

</script>
