import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

// Metadatos para la aplicación, que incluyen el título y la descripción de la página
export const metadata = {
  title: "Comida Mexicana",
  description: "DE MÉXICO PARA EL MUNDO TRADICIONES Y TENDENCIAS DE LA COCINA MEXICANA.",
};

//Asegura que el encabezado y estilos globales se apliquen a todas las paginas.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
