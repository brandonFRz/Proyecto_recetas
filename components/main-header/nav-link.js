'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css'

//Componente que renderiza los enlaces de navegación
export default function NavLink() {
    const path = usePathname();

  return (
    <>
      <ul>
        <li>
          <Link
            className={path.startsWith("/meals") ? classes.active : undefined}
            href={"/meals"}
          >
            Buscar platillos
          </Link>
        </li>
        <li>
          <Link
            className={
              path.startsWith("/community") ? classes.active : undefined
            }
            href={"/community"}
          >
            Comunidad
          </Link>
        </li>
      </ul>
    </>
  );
}
