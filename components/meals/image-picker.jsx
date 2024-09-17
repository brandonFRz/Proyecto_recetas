"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null); // URL para la vista previa
  const [file, setFile] = useState(null); // Archivo real para subir
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      setPickedImage(null);
      setFile(null);
      return;
    }

    if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
      alert("Formato de archivo no permitido. Solo PNG o JPEG.");
      return;
    }

    // Guarda la URL para mostrar la vista previa
    setPickedImage(URL.createObjectURL(selectedFile));
    // Guarda el archivo real
    setFile(selectedFile);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No se ha seleccionado ninguna imagen.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="La imagen seleccionada por el usuario"
              fill
            />
          )}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          name={name} 
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Elige una Imagen
        </button>
      </div>
    </div>
  );
}
