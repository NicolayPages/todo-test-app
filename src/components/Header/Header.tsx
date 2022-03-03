import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLinks, getLogo, getName } from '../../selectors/header-selectors';
import { LinkType } from '../../types/types';
import s from './Header.module.scss';

const Header: React.FC = React.memo(() => {

   const logo = useSelector(getLogo)
   const name = useSelector(getName)
   const links = useSelector(getLinks)

   let linksList = links.map((l: LinkType) => <li key={l.id}><Link className={s.link} to={l.to}>{l.name}</Link></li>)

   return (
      <header className={s.wrapper}>
         <div className={s.container}>
            <div className={s.logo}>
               <Link className={s.icon} to="/"><img src={logo} alt="" /></Link>
               <p className={s.name}>{name}</p>
            </div>
            <nav className={s.menu}>
               <ul className={s.list}>
                  {linksList}
               </ul>
            </nav>
         </div>
      </header>
   )
})

export default Header
