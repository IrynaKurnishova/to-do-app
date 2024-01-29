import {v4 as uuidv4} from "uuid";
import axios from "axios";

export default {
    actions: {
        async createTask({commit},{name, description} ) {
            const task = {
                id: uuidv4(),
                name: name,
                description: description,
                status: 'todo',
                createdAt: Date.now(),
                dueDate: null
            }
            try {
                await axios.post('http://localhost:3000/tasks', task)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/tasks')
                return response.data
            } catch (error) {
                console.error(error)
            }
        },
        async updateTask({commit}, updatedTask) {
            try {
                const response = await axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
                return response.data
            } catch (error) {
                console.error(error)
            }
        },
        async deleteTask({commit}, id) {
            try {
                const response = await axios.delete(`http://localhost:3000/tasks/${id}`)
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    },
}
