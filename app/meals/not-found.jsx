import Link from "next/link";

//Pagina de 404 personalizada con un enlace para lista de platillos.
export default function NotFound() {
    return (
      <main className="not-found">
        <h1>No se encontro el platillo</h1>
        <p>Lamentablemente, no hemos podido encontrar la página solicitada ni los datos de la comida.</p>
        <Link href={'/meals'}>¡Explora mas de nuestras recetas!</Link>
      </main>
    );
  }