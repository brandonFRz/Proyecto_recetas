'use client'

import React from "react";

//Pagina que maneja los errores de obtención de datos
export default function Error({error}) {
  return (
    <main className="error">
      <h1>Ocurrio un error</h1>
      <p>No se han podido obtener los datos de la comidas. Vuelva a intentarlo más tarde</p>
    </main>
  );
}
