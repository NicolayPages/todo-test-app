import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import changeIcon from '../../assets/images/change.png';
import completeIcon from '../../assets/images/complete.png';
import deleteIcon from '../../assets/images/delete.png';
import MiniLoader from '../../components/MiniLoader/MiniLoader';
import s from './Todo.module.scss';

type PropsType = {
   title: string
   completed: boolean
   id: number
   isExpectation: any
   deleteTask: (id: number) => void
   completeTask: (id: number) => void
   changeTask: (id: number, value: string) => void
}

export const Task: React.FC<PropsType> = React.memo((props) => {

   const { title, id, completed, deleteTask, completeTask, changeTask, isExpectation } = props

   let [editMode, setEditMode] = useState(false)
   let [value, setValue] = useState(title)

   const taskClasses = [s.task]


   let editTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }
   let onEditMode = () => {
      setEditMode(true)
   }
   let onChangeTask = () => {
      setEditMode(false)
      changeTask(id, value)
   }
   let onDeleteTask = () => {
      deleteTask(id)
   }
   let onCompleteTask = () => {
      completeTask(id)
   }

   if (completed) {
      taskClasses.push(s.completed);
   }

   return (
      <div className={taskClasses.join(' ')}>
         <div className={s.description}>
            <span className={s.number}>{id}.</span>
            {editMode
               ? <input
                  className={s.editInput}
                  autoFocus
                  type="text"
                  onChange={editTaskValue}
                  onBlur={onChangeTask}
                  value={value}
               />
               : <p className={s.text}>{title}</p>
            }
         </div>
         <div className={s.actions}>
            {!completed &&
               <button disabled={isExpectation.some((id: number | null) => id === id)} onClick={onEditMode} className={s.btn}>
                  <img src={changeIcon} alt="change" />
               </button>}
            {!completed &&
               <button disabled={isExpectation.some((id: number | null) => id === id)} onClick={onCompleteTask} className={s.btn}>
                  <img src={completeIcon} alt="complete" />
               </button>}
            <button disabled={isExpectation.some((id: number | null) => id === id)} onClick={onDeleteTask} className={s.btn}>
               <img src={deleteIcon} alt="delete" />
            </button>
         </div>
      </div >
   )
})