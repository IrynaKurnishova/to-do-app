<template>
  <div :class="`todo-item ${task.done && 'done'}`">
    <label>
      <input type="checkbox" v-model="task.done"/>
      <span :class="`bubble ${task.category}`"></span>
    </label>
    <div class="todo-content">
      <input type="text" v-model="task.content"/>
    </div>
    <div class="todo-content">
      <select
          :id="task.id"
          class="form-select-sm"
          :class="optionClass"
          v-model="selectedOption"
      >
        <option v-for="(option, index) in options"  :value="option" :key="index">{{ option }}</option>
      </select>
    </div>
    Due -  <date-picker/>
    <div class="actions gap-2">
      <button type="button" class="btn btn-outline-secondary" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
        </svg>
      </button>
      <button type="button" class="btn btn-outline-danger" @click="emitRemoveTask(task.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import DatePicker from "./date-picker.vue"
import {computed, ref} from "vue"
import {useStore} from "vuex"

 const props = defineProps({
  id: String
})

const emit = defineEmits(['removeTask'])

const selectedOption = ref('Todo')
const options = ref(['Todo', 'In progress', 'Done'])
const store = useStore()
const task = computed(() => store.getters.getTask(props.id))

const emitRemoveTask = (id) => {
  emit('removeTask', id)
}

const optionClass = computed(() => {
  return selectedOption.value === 'Done' ? 'bg-success' : (selectedOption.value === 'In progress' ? 'bg-warning' : 'bg-danger')
})
</script>

