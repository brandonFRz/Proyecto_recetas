import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

//Renderiza la pagina de inicio con un carrusel y enlaces a otras secciones de la pagina.
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Solo lo mejor en tu mesa.</h1>
            <p>Recetas tradicionales de la cocina mexicana</p>
          </div>
          <div className={classes.cta}>
            <Link href={"/community"}>Unete a la comunidad</Link>
            <Link href={"/meals"}>Todas las recetas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Como funciona</h2>
          <p>
            En esta pagina, queremos que compartir y descubrir recetas de comida
            mexicana sea fácil y divertido. Aquí te mostramos cómo puedes
            empezar:
          </p>
          <p>
            Explora cientos de recetas mexicanas auténticas, desde platillos
            tradicionales hasta creaciones modernas.
          </p>
          <h3>Comparte tus Creaciones</h3>
          <p>
            Comparte tus fotos, ingredientes y pasos para preparar tus platillos
            favoritos.
          </p>
          <p>
            Añade consejos y trucos personales para ayudar a otros a
            perfeccionar sus habilidades culinarias.
          </p>
        </section>
      </main>
    </>
  );
}
