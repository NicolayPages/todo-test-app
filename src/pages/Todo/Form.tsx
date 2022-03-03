import * as React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import s from './Todo.module.scss';


type PropsType = {
   addTask: (value: string) => void
}

export const Form: React.FC<PropsType> = React.memo(({ addTask }) => {

   let [value, setValue] = useState('')
   let onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }
   let setTaskValue = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addTask(value)
      setValue('')
   }

   return (
      <form onSubmit={setTaskValue} className={s.form}>
         <input
            onChange={onChange}
            value={value}
            className={s.input}
            type="text"
            placeholder='write your tasks...'
         />
         <button disabled={!value} className={s.btn}>add task</button>
      </form>
   )
})