import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLink, getTitle } from '../../selectors/welcome-selectors';
import s from './Welcome.module.scss'

const Welcome: React.FC = React.memo(() => {

   const title = useSelector(getTitle)
   const link = useSelector(getLink)

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>{title}</h1>
         <div className={s.flex}>
            <div className={s.description}>
               <h3>Short App description</h3>
               <ul>
                  <li>1. The application contains 2 pages: main page and todo list</li>
                  <li>2. The transition between pages is implemented through the navbar</li>
                  <li>3. The page for the todo list has an interactive list</li>
                  <li>4. List data requested from `https://jsonplaceholder.typicode.com/todos`</li>
                  <li>5. Implemented the ability to add/change/delete todo</li>
                  <li>6. Implemented pagination without reloading the page</li>
               </ul>
            </div>
            <div className={s.description}>
               <h3>Technologies and libraries were used in this app</h3>
               <ul>
                  <li>1. Axios</li>
                  <li>2. Redux</li>
                  <li>3. Redux-thunk</li>
                  <li>4. React-router</li>
                  <li>5. Typescript</li>
               </ul>
            </div>
         </div>
         <div className={s.linkWrapper}>
            <Link className={s.link} to={link.to}>{link.name}</Link>
         </div>
      </div>
   )
})

export default Welcome
