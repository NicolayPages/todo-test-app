import React, { useState } from 'react';
import s from './Paginator.module.scss'


type PropsType = {
   totalCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (p: number) => void
}

const Paginator: React.FC<PropsType> = React.memo((props) => {
   let pagesCount = Math.ceil(props.totalCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   };

   let portionSize = props.pageSize;
   let portionCount = Math.ceil(props.totalCount / portionSize);

   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;

   let pagination = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
      return <li key={p} onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selected : s.g}>{p}</li>
   });

   return (
      <div className={s.paginator}>
         {portionNumber > 1 &&
            <button className={s.pagBtn} onClick={() => (setPortionNumber(portionNumber - 1))}>prev</button>}
         <ul className={s.list}>{pagination}</ul>
         {portionCount > portionNumber * props.pageSize &&
            <button className={s.pagBtn} onClick={() => (setPortionNumber(portionNumber + 1))}>next</button>}
      </div>
   );
})

export default Paginator;

