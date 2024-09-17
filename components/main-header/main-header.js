import Link from "next/link";
import Image from "next/image";

import MainhHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

//Encabezado principal con barra de navegación.
export default function MainHeader() {
  return (
    <>
      <MainhHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logoImg} alt="Plato con comida" priority />
          Comida Mexicana
        </Link>

        <nav className={classes.nav}>
          <NavLink/>
        </nav>
      </header>
    </>
  );
}
