import axios from "axios";
import { TaskType } from "../types/types";


const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/',
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
});

export const todoAPI = {
   getTasks(limit = 10, page = 1,) {
      return instance.get(`todos`, {
         params: {
            _limit: limit,
            _page: page
         }
      }).then(response => {
         return response;
      })
   },
   addTasks(task: TaskType) {
      return instance.post(`todos`, {
         body: {
            userId: task.userId,
            id: task.id,
            title: task.title,
            completed: task.completed
         }
      }).then(response => {
         return response.data;
      })
   },
   changeTasks(taskId: number, taskTitle: string) {
      return instance.put(`todos/${taskId}`, {
         body: { title: taskTitle }
      }).then(response => {
         return response.data;
      })
   },
   completeTasks(taskId: number, complete: boolean) {
      return instance.put(`todos/${taskId}`, {
         body: { completed: complete }
      }).then(response => {
         return response.data;
      })
   },
   deleteTasks(taskId: number) {
      return instance.delete(`todos/${taskId}`)
   },
};

