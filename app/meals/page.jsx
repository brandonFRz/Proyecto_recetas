"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

//Renderiza una lista con todas las recetas disponibles.
export default function Mealspage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (error) {
        console.error("Error fetching the meals", error);
      } 
    };
    fetchMeals();
  }, []);


  return (
    <>
      <header className={classes.header}>
        <h1>
          Descubre Nuestras Recetas
          <span className={classes.highlight}> Mexicanas</span>
        </h1>
        <p>
          Explora una colección de deliciosos platillos tradicionales y modernos
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Comparte tu receta favorita</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
