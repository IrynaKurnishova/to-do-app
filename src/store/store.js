import { createStore } from 'vuex';
import {v4 as uuidv4} from "uuid";

const store = createStore({
    state() {
        return {
            tasks: [],
        };
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task)
        },
        REMOVE_TASK(state, taskId) {
           state.tasks = state.tasks.filter(task => task.id !== taskId)
        },
        // updateTask(state, updatedTask) {
        //     const index = state.tasks.findIndex(task => task.id === updatedTask.id)
        //     if (index !== -1) {
        //         state.tasks.splice(index, 1, updatedTask)
        //     }
        // },
    },
    actions: {
        createTask({commit}, {inputContent, inputCategory} ) {
            if (inputContent === '' || inputCategory === null) {
                return
            }
            const task =  {
                id: uuidv4(),
                content: inputContent,
                category: inputCategory,
                done: false,
                createdAt: new Date().getTime()
            }
            commit('ADD_TASK', task)
        },
        deleteTask({ commit }, taskId) {
            commit('REMOVE_TASK', taskId)
        },
        // updateTask({ commit }, updatedTask) {
        //     commit('updateTask', updatedTask);
        // },
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getTask: (state) => (id) => {
            return state.tasks.find((task) => task.id === id)
        },
    },
});

export default store;
