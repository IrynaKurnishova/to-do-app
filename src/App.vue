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

    <create :todos="todos"/>

    <section class="todo-list">
      <h4>TODO LIST</h4>
      <div class="list">
        <div v-for="todo in todosAsc" :class="`todo-item ${todo.done && 'done'}`">
          <label>
            <input type="checkbox" v-model="todo.done"/>
            <span :class="`bubble ${todo.category}`"></span>
          </label>
          <div class="todo-content">
            <input type="text" v-model="todo.content"/>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-outline-danger" @click="removeTodo(todo)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {ref, computed, watch, onMounted} from 'vue'
import Create from "./components/create.vue";

const todos = ref([])
const name = ref('')

const todosAsc = computed(() => todos.value.sort((a,b) => {
  return b.createdAt - a.createdAt
}))


const removeTodo = (todo) => {
  todos.value = todos.value.filter(t => t.id !== todo.id)
  updateLocalStorage()
}

const updateLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

watch(todos, newVal => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {deep: true})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>
