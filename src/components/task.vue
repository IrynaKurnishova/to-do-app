<template>
  <div class="todo-item" :class="bgGreen">
    <div class="todo-content d-grid">
      <input type="text" v-model="taskToUpdate.name" />
      <input type="text" v-model="taskToUpdate.description" class="text-black-50" />
    </div>
    <div class="todo-content">
      <select :id="task.id" class="form-select-sm" :class="optionClass" v-model="taskToUpdate.status">
        <option v-for="(option, index) in options" :value="option.id" :key="index">{{ option.name }}</option>
      </select>
    </div>
    Due - <date-picker v-model="taskToUpdate.dueDate" />
    <div class="actions gap-2 d-flex align-items-center">
      <button type="button" class="btn btn-outline-secondary" @click="emitSaveUpdates">
        <i class="bi bi-floppy-fill"></i>
      </button>
      <button type="button" class="btn btn-outline-danger" @click="emitRemoveTask(task.id)">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import DatePicker from "./date-picker.vue"
import { computed, reactive, watch } from "vue"

const props = defineProps({
  task: Object,
})

const emit = defineEmits(["updateTask", "removeTask"])
const options = reactive([
  { name: "Todo", id: "todo" },
  { name: "In progress", id: "in_progress" },
  { name: "Done", id: "done" },
])

const taskToUpdate = reactive({
  id: null,
  name: "",
  description: "",
  status: "",
  dueDate: null,
  createdAt: null,
  updatedAt: null,
})

watch(
    () => props.task,
    (newVal) => {
      Object.assign(taskToUpdate, newVal)
    },
    { immediate: true }
)

const optionClass = computed(() => {
  const bg = {
    done: "bg-success",
    in_progress: "bg-warning",
    todo: "bg-danger",
  }
  return bg[taskToUpdate.status]
})

const bgGreen = computed(() => {
  return { "bg-success bg-opacity-50": taskToUpdate.status === "done" }
})

const emitSaveUpdates = () => {
  emit("updateTask", { ...taskToUpdate })
}

const emitRemoveTask = (id) => {
  emit("removeTask", id)
}
</script>
