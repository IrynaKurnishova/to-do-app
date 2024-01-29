<template>
  <section class="todo-list">
    <h4>TODO LIST</h4>
    <div class="list">
      <task v-for="task in tasks" :task="task" @remove-task="removeTask" @update-task="saveUpdates"/>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex"
import Task from "./task.vue"

const store = useStore()
const emit = defineEmits(['taskUpdated', 'taskDeleted'])

defineProps({
  tasks: Array
})

const removeTask = async (id) => {
  await store.dispatch('deleteTask', id)
  emit('taskDeleted')
}

const saveUpdates = async (updatedTask) => {
  await store.dispatch('updateTask', updatedTask)
  emit('taskUpdated')
}
</script>
