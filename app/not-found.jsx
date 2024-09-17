import React from 'react'
import Link from 'next/link'
//Pagina de 404 personalizada con un enlace para volver a la pagina principal
export default function Notfound() {
  return (
    <main className='not-found'>
      <h1>¡Lo sentimos!</h1>
      <h2>La página que buscas no existe</h2>
      <p> Quizá has escrito mal la dirección, o la hemos roto nosotros.</p>
      <Link href={"/"}>Volver a Inicio</Link>
    </main>
  )
}
