import React from 'react'
import Image from 'next/image'

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png'
import classes from '../community/page.module.css'

//Muestra de que trata la pagina
export default function Comunitypage() {
  return (
    <div>
      <header className={classes.header}>
        <h1>Una pasión en común: <span className={classes.highlight}>Comida</span></h1>
      </header>
      <main className={classes.main}>
        <h2>Recursos y Guías</h2>
        <ul className={classes.list}>
          <li>
            <Image src={mealIcon} alt='Una comida deliciosa'/>
            <p>Comparte tus creaciones culinarias y explora las recetas de otros miembros.</p>
          </li>
          <li>
            <Image src={communityIcon} alt='Gente cocinando'/>
            <p>Conecta con otros amantes de la cocina. ¡Explora, comparte y disfruta!.</p>
          </li>
          <li>
            <Image src={eventsIcon} alt='Gente cocinando en un evento'/>
            <p>Accede a una variedad de recursos y guías para mejorar tus habilidades culinarias.</p>
          </li>
        </ul>
      </main>
    </div>
  )
}
