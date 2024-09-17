# Recetas Mexicanas App
Este proyecto es una aplicación web para compartir y explorar recetas tradicionales mexicanas. Los usuarios pueden subir sus propias recetas con imágenes, buscar platillos compartidos por otros, y descubrir nuevos platillos favoritos.

## Características
- **Compartir Recetas:** Los usuarios pueden subir recetas incluyendo el nombre del platillo, un resumen, las instrucciones de preparación, y una imagen del platillo.
- **Explorar Recetas:** Los usuarios pueden navegar y buscar recetas compartidas por otros, viendo los detalles completos de cada platillo.
- **Slideshow de Imágenes:** La página principal presenta un carrusel con imágenes de platillos populares para atraer la atención de los visitantes.
- **Validación de Datos:** Se asegura que todos los campos necesarios sean completados y que las imágenes subidas sean válidas.
- **Protección Contra XSS:** Las instrucciones de las recetas son sanitizadas para evitar ataques de tipo XSS.

## Tecnologías
- **Next.js:** Framework de React para el desarrollo de aplicaciones web modernas.
- **React:** Biblioteca JavaScript para construir interfaces de usuario.
- **SQLite:** Base de datos ligera utilizada para almacenar las recetas.
- **Better SQLite3:** Librería para interactuar con SQLite en Node.js.
- **slugify:** Utilizado para crear URLs amigables basadas en los títulos de las recetas.
- **XSS:** Para sanitizar las instrucciones de los platillos y evitar ataques XSS.
- **CSS Modules:** Estilos modulares que permiten el scoped CSS para cada componente.

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/recetas-mexicanas.git
```
2. Navega hasta la carpeta del proyecto:
```bash
cd recetas-mexicanas
```
3. Instala las dependencias necesarias:
```bash
npm install
```
4. Inicia el servidor de desarrollo:
 ```bash
 npm run dev
 ```

## Uso
Una vez que la aplicación esté en funcionamiento, puedes acceder a ella en tu navegador en http://localhost:3000.

- **Compartir Recetas:** Visita la página "Comparte tus recetas" y completa el formulario para compartir un platillo.
- **Explorar Recetas:** Dirígete a la sección "Buscar platillos" para ver todas las recetas compartidas por otros usuarios.

## Estructura del Proyecto
- `components/` Contiene todos los componentes reutilizables, como `ImageSlideshow`, `MainHeader`, `ImagePicker`, etc.
- `lib/` Contiene la lógica del servidor, como `meals.js` y `action.js`.
- `pages/` Contiene las páginas principales de la aplicación.
- 
## Vista Previa
Aquí hay una vista previa de cómo se ve la aplicación:
## Pagina principal
<img src="https://github.com/user-attachments/assets/f26c9aa4-b2ec-47af-b2c8-3de6884cdfd8" alt="comida-mexicana-main" width="500"/>

### About
<img src="https://github.com/user-attachments/assets/539f5cf5-699b-419b-bf4b-5aff7037ae47" alt="comida-mexicana-community" width="500"/>

### Platillos
<img src="https://github.com/user-attachments/assets/279a982b-7975-4582-a2bf-941c1a4e0b5c" alt="comida-mexicana-meals" width="500"/>

### Form
<img src="https://github.com/user-attachments/assets/ab5e8c63-dee7-45c5-950b-b80ebcd6810a" alt="comida-mexicana-form" width="500"/>

### Receta
<img src="https://github.com/user-attachments/assets/d72f5dcc-2504-462f-a738-6cc4100d940d" alt="comida-mexicana-meals-recipe" width="500"/>



