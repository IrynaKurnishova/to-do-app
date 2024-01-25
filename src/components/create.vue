<template>
  <section class="create-todo">
    <h4>CREATE A TODO</h4>

    <form @submit.prevent="addTodo">
      <h5>What's on your todo list?</h5>
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
      <h5>Schedule</h5>
      <div class="d-grid gap-2">
        <button class="btn btn-outline-info" type="submit">Add todo</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import { v4 as uuidv4 } from 'uuid'

const inputContent = ref('')
const inputCategory = ref(null)
const props = defineProps({
  todos: Array
})

const addTodo = () => {
  if (inputContent.value.trim() === '' || inputCategory.value === null) {
    return
  }
  props.todos.push({
    id: uuidv4(),
    content: inputContent.value,
    category: inputCategory.value,
    done: false,
    createdAt: new Date().getTime()
  })

  inputContent.value = ''
  inputCategory.value = null

}

</script>
