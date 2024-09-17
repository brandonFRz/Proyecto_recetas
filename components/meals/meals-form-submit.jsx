'use client'

import { useFormStatus } from "react-dom";

//Componente que si la acción del envió esta en curso
export default function MealsButton() {
  const {pending} = useFormStatus();
  
  return (
    <button disabled={pending}>
      {pending ? "Enviando..." : "Comparte tu platillo"}
    </button>
  );
}
