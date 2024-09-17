import React from "react";
import classes from "./page.module.css";

import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Mealpage({ params }) {
  // Obtiene la receta usando el parámetro `slug` de la URL
  const meal = await getMeal(params.slug)

  // Si no se encuentra la receta, redirige a la página de "No encontrado"
  if (!meal){
    notFound();
  }

  // Reemplaza los saltos de línea en las instrucciones por etiquetas <br/> para el formato HTML
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  //Renderiza el contenido con información de la receta seleccionada
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/*Permite renderizar las instrucciones con el formato HTML adecuado */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
