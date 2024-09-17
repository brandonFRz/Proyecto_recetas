"use client"

import React, { useEffect, useState } from "react";
import barbacoaImg from "@/assets/barbacoa.jpg";
import carnitasImg from "@/assets/carnitas.jpg";
import chilesImg from "@/assets/chiles-en-nogada.jpeg";
import moleImg from "@/assets/el-mole.jpg";
import pescadoTallaImg from "@/assets/pescado-a-la-talla.jpg";
import pescadoVeracruzImg from "@/assets/pescado-a-la-veracruzana.jpg";
import pozoleImg from "@/assets/pozole.jpeg";
import tlayudasImg from "@/assets/tlayudas.jpg";
import classes from "./image-slideshow.module.css";
import Image from "next/image";

//Array que contienen las imágenes 
const images = [
  { image: barbacoaImg, alt: "Una deliciosa barbacoa" },
  { image: carnitasImg, alt: "Unas deliciosas carnitas" },
  { image: chilesImg, alt: "Un delicioso chile en nogada" },
  { image: moleImg, alt: "Un delicioso mole" },
  { image: pescadoTallaImg, alt: "Un delicioso pescado a la talla" },
  { image: pescadoVeracruzImg, alt: "Un delicioso pescado veracruzano" },
  { image: pozoleImg, alt: "Un delicioso pozole" },
  { image: tlayudasImg, alt: "Una deliciosa tlayuda" },
];

function ImageSlideshow() {
  //Estado para el indice actual de la imagen.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Efecto para cambiar la imagen cada 5 segundos.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //Mapeado sobre la imagen, mostrando solo la imagen activa.
  return (
    <div  className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""} //Clase activa para la imagen visible
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default ImageSlideshow;

