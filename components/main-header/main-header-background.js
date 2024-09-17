import React from "react";
import classes from './main-header-background.module.css';

//Este componente define el fondo para el encabezado.
export default function MainhHeaderBackground() {
  return (
    <div className={classes['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="5%" x2="60%" y2="25%">
            <stop
              offset="0%"
              style={{ stopColor: "#935753      ", stopOpacity: "1" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#66100A   ", stopOpacity: "1" }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
