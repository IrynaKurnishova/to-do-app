<template>
  <main class="card">
    <section class="greeting">
      <h2 class="title">
        What's up,
        <input
          type="text"
          placeholder="Name here"
          v-model="name"
        />
      </h2>
    </section>

    <create-task />

    <tasks-list/>
  </main>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue'
import CreateTask from "./components/create-task.vue"
import TasksList from "./components/tasks-list.vue"
const name = ref('')

// const updateLocalStorage = () => {
//   localStorage.setItem('todos', JSON.stringify(todos.value))
// }
//
watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})
//
// watch(todos, newVal => {
//   localStorage.setItem('todos', JSON.stringify(newVal))
// }, {deep: true})
//
onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  // todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

