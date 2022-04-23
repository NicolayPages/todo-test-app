import * as React from 'react';
import s from './Footer.module.scss'

const Footer: React.FC = React.memo(() => {
   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <p>@Copyright Test Task for WelbeX</p>
         </div>
      </div>
   )
})
export default Footer