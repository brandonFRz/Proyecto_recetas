# Recetas Mexicanas App
Este proyecto es una aplicación web para compartir y explorar recetas tradicionales mexicanas. Los usuarios pueden subir sus propias recetas con imágenes, buscar platillos compartidos por otros, y descubrir nuevos platillos favoritos.

## Características
- **Sube y Comparte Recetas:** Completa un formulario con el nombre del platillo, una descripción breve, instrucciones de preparación y una imagen para compartir tu receta.
- **Explorar Recetas:** Los usuarios pueden navegar y buscar recetas compartidas por otros, viendo los detalles completos de cada platillo.
- **Slideshow de Imágenes:** La página principal presenta un carrusel con imágenes de platillos populares para atraer la atención de los visitantes.
- **Validación de Datos:** Se asegura que todos los campos necesarios sean completados y que las imágenes subidas sean válidas.
- **Protección Contra XSS:** Las instrucciones de las recetas son sanitizadas para evitar ataques de tipo XSS.

## Tecnologías
- **Next.js:** Framework de React para el desarrollo de aplicaciones web modernas.
- **React:** Biblioteca JavaScript para construir interfaces de usuario.
- **Supabase:** Servicio backend para base de datos, autenticación y almacenamiento de archivos.
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
4. Configura las variables de entorno de Supabase en .env:
 ```bash
  NEXT_PUBLIC_SUPABASE_URL=<tu-url-de-supabase>
  NEXT_PUBLIC_SUPABASE_KEY=<tu-api-key>
 ```

5. Inicia el servidor de desarrollo:
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
  
## Vista Previa
Aquí hay una vista previa de cómo se ve la aplicación:

## Pagina principal
<img src="https://github.com/user-attachments/assets/cac3599b-7908-4476-8c70-26e27319ec09" alt="comida-mexicana-main" width="500"/>

### About
<img src="https://github.com/user-attachments/assets/57f905fa-864b-4285-b287-f775e08f789f" alt="comida-mexicana-community" width="500"/>

### Platillos
<img src="https://github.com/user-attachments/assets/da7ec4da-6763-429c-be3e-4885ad7471e0" alt="comida-mexicana-community" width="500"/>

### Form
<img src="https://github.com/user-attachments/assets/a9f1ba07-65ea-42c8-8d41-b9a2d689088b" alt="comida-mexicana-form" width="500"/>

### Receta
<img src="https://github.com/user-attachments/assets/a912fa14-0cb0-4a57-9a85-f8994b5935a5" alt="comida-mexicana-meals-recipe" width="500"/>




