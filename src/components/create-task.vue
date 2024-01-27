<template>
  <section class="create-todo">
    <h4>CREATE A TODO</h4>

    <form @submit.prevent="addTask">
      <h5>What's on your tasks list?</h5>
      <input
          type="text"
          placeholder="e.g. make a video"
          v-model="inputContent"
      />
      <h5>Pick a category</h5>
      <div class="options">
        <label>
          <input
              type="radio"
              name="category"
              value="business"
              v-model="inputCategory"
          />
          <span class="bubble business"></span>
          <div>Business</div>
        </label>
        <label>
          <input
              type="radio"
              name="category"
              value="personal"
              v-model="inputCategory"
          />
          <span class="bubble personal"></span>
          <div>Personal</div>
        </label>

      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-outline-info" type="submit">Add task</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";

const store = useStore()
const inputContent = ref('')
const inputCategory = ref(null)

const addTask = () => {
  store.dispatch(
      'createTask', {
        inputContent : inputContent.value.trim(),
        inputCategory : inputCategory.value
      })
  inputContent.value = ''
  inputCategory.value = null
}

</script>
