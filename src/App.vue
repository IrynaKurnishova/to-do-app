<template>
  <main class="card">
    <div>

    </div>
    <section class="greeting">
      <alert :success-alert="successAlert" :alert-text="updates"/>
      <h2 class="title">
        What's up,
        <input
          type="text"
          placeholder="input name here"
          v-model="name"
        />
      </h2>
    </section>

    <create-task @task-created="fetchData"/>

    <tasks-list
        :tasks="tasks"
        @task-updated="showAlert('updated')"
        @task-deleted="showAlert('deleted')"
    />
  </main>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue'
import {useStore} from "vuex"
import CreateTask from "./components/create-task.vue"
import TasksList from "./components/tasks-list.vue"
import Alert from "./components/alert.vue"

const name = ref('')
const store = useStore()
const tasks = ref([])
const successAlert = ref(false)
const updates = ref('')

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})
const fetchData = async () => {
  tasks.value = await store.dispatch('fetchData')
};

onMounted(fetchData)

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
})

const showAlert = (value) => {
  successAlert.value = true
  updates.value = value
  fetchData()
  setTimeout(() => {
    successAlert.value = false
  }, 2000)
}
</script>

