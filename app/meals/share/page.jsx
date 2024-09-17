'use client'

import { useRouter } from "next/navigation"; 
import { useFormState } from "react-dom";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/action";
import MealsButton from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  const router = useRouter();
  const [state = { message: null }, formAction] = useFormState(shareMeal, { message: null });

  
  if (state?.success) {
    router.push("/meals");
  }
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Comparte tus <span className={classes.highlight}>recetas favoritas</span>
        </h1>
        <p>Comparte tus fotos, ingredientes y pasos para preparar tus platillos favoritos</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Tu nombre</label>
              <input type="text" name="name" id="name"  required/>
            </p>
            <p>
              <label htmlFor="email">Tu email</label>
              <input type="email" name="email" id="email"  required/>
            </p>
          </div>
          <p>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" required />
          </p>
          <p>
            <label htmlFor="summary">Resumen</label>
            <input type="text" name="summary" id="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instrucciones</label>
            <textarea name="instructions" id="instructions" rows="10" required />
          </p>

          <ImagePicker label={"Tu imagen"} name={"image"} />
          {console.log(state.message)}
          {state?.message && <p>{state.message}</p>}
          
          <p className={classes.actions}>
            <MealsButton />
          </p>
        </form>
      </main>
    </>
  );
}
