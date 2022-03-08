import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../components/Paginator/Paginator';
import Preloader from '../../components/Preloader/Preloader';
import { addTask, changeTask, completeTask, deleteTask, requestTasks } from '../../redux/reducers/todo-reducer';
import { getIsFetching, getLimit, getPage, getTasks, getTotalCount } from '../../selectors/todo-selectors';
import { TaskType } from '../../types/types';
import { Form } from './Form';
import { Task } from './Task';
import s from './Todo.module.scss';




const Todo: React.FC = React.memo(() => {

   const tasks = useSelector(getTasks)
   const isFetching = useSelector(getIsFetching)
   const page = useSelector(getPage)
   const limit = useSelector(getLimit)
   const totalCount = useSelector(getTotalCount)
   let dispatch = useDispatch()

   useEffect(() => {
      if (tasks.length == 0) {
         dispatch(requestTasks(page, limit))
      }
   }, []);


   let onPageChanged = (page: number) => {
      dispatch(requestTasks(page, limit))
   }
   let onAddTask = (taskTitle: string) => {
      let task = {
         userId: 1,
         id: tasks.length + 1,
         title: taskTitle,
         completed: false
      }
      dispatch(addTask(task))
   }
   let onDeleteTask = (taskId: number) => {
      dispatch(deleteTask(taskId))
   }
   let onChangeTask = (taskId: number, newValue: string) => {
      dispatch(changeTask(taskId, newValue))
   }
   let onCompleteTask = (taskId: number) => {
      dispatch(completeTask(taskId, true))
   }

   let tasksList = tasks.map((t: TaskType) =>
      <Task
         key={t.id} title={t.title}
         id={t.id} completed={t.completed}
         deleteTask={onDeleteTask}
         completeTask={onCompleteTask}
         changeTask={onChangeTask}
      />)

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>ToDo List</h1>
         <Form addTask={onAddTask} />
         <div className={s.list}>
            {isFetching ? < Preloader /> : tasksList}
         </div>
         <Paginator
            totalCount={totalCount}
            pageSize={10}
            currentPage={page}
            onPageChanged={onPageChanged}
         />
      </div>
   )
})



export default Todo