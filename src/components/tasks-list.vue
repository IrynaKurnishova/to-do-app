<template>
  <section class="todo-list">
    <h4>TODO LIST</h4>
    <div class="list">
      <task v-for="task in tasks" :id="task.id" @remove-task="removeTask"/>
    </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'
import {computed} from "vue"
import Task from "./task.vue"

const store = useStore()
const tasks = computed(() => store.getters.getTasks.sort((a, b) => {
  return b.createdAt - a.createdAt
}))
const removeTask = (id) => {
  store.dispatch('deleteTask', id)
}
</script>
