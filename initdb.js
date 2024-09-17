const sql = require('better-sqlite3');

const dbPath = process.env.NODE_ENV === 'production' 
  ? '/tmp/meals.db' 
  : './meals.db'; 

const db = sql(dbPath);

const dummyMeals = [
  {
    title: "Barbacoa",
    slug: "barbacoa",
    image: "/images/barbacoa.jpg",
    summary: "Deliciosa Barbacoa de res lista para disfrutar en tu almuerzo!",
    instructions: `
        Paso 1:
           Coloca la carne en la olla de presión. Cubre con agua y agrega la cebolla, 3 dientes de ajo, laurel y sal al gusto. Tapa y cuece a presión durante 1 hora (a partir de el momento en que la válvula empiece a sonar). 
  
        Paso 2:
           Una vez lista, saca la carne de la olla y deshebra. Cuela el caldo, toma 2 tazas para la salsa y reserva el resto para otro uso. 
  
        Paso 3:
           Hierve los chiles durante 5 minutos. Retira del fuego y deja reposar en el agua caliente durante 5 minutos más o hasta que se suavicen. 
  
        Paso 4:
           Licúa muy bien los chiles con 2 tazas del caldo de la carne, vinagre, ajo, pimienta negra, orégano, tomillo, cominos, jengibre, clavos, pimientas gordas, pimienta negra y canela, hasta tener una salsa espesa completamente tersa. 
      
        Paso 5:
           Vierte la salsa dentro de una cazuela o cacerola grande a fuego medio. Cuando empiece a hervir, reduce el fuego a lo más bajo y agrega la carne; revuelve muy bien. Tapa la cazuela y cocina la carne por lo menos 30 minutos para que los sabores se integren. 
           `,
    creator: "Juan Lopez",
    creator_email: "juanlopez@example.com",
  },
  {
    title: "Carnitas",
    slug: "carnitas",
    image: "/images/carnitas.jpg",
    summary: "Jugosas carnitas de cerdo, perfectas para tacos o tortas.",
    instructions: `
        Paso 1:
           Corta la carne de cerdo en trozos medianos y colócala en una olla grande. Agrega sal, pimienta, orégano y ajo. 

        Paso 2:
           Cubre la carne con agua y cocina a fuego alto hasta que hierva. Reduce el fuego y cocina a fuego lento hasta que el agua se evapore y la carne comience a dorarse en su propia grasa.

        Paso 3:
           Cocina la carne, removiendo ocasionalmente, hasta que esté bien dorada y crujiente por fuera, pero jugosa por dentro.

        Paso 4:
           Sirve las carnitas con tortillas, cebolla, cilantro, salsa y limón al gusto.
           `,
    creator: "Maria Gomez",
    creator_email: "mariagomez@example.com",
  },
  {
    title: "Chile en Nogada",
    slug: "chile-en-nogada",
    image: "/images/chiles-en-nogada.jpeg",
    summary:
      "Tradicional chile en nogada, un platillo emblemático de la cocina mexicana.",
    instructions: `
        Paso 1:
           Asa y pela los chiles poblanos. Haz un corte a lo largo para retirar las semillas y las venas.

        Paso 2:
           Prepara el relleno con carne molida de res y cerdo, frutas como plátano, manzana y pera, y especias. Cocina todo junto.

        Paso 3:
           Rellena los chiles con la mezcla de carne y frutas. 

        Paso 4:
           Prepara la nogada mezclando nuez de Castilla, queso fresco, crema, azúcar y un toque de jerez.

        Paso 5:
           Baña los chiles rellenos con la nogada y decora con granada y perejil.
           `,
    creator: "Carlos Martinez",
    creator_email: "carlosmartinez@example.com",
  },
  {
    title: "Mole",
    slug: "mole",
    image: "/images/el-mole.jpg",
    summary:
      "Exquisito mole poblano, una combinación perfecta de sabores y especias.",
    instructions: `
        Paso 1:
           Tosta chiles secos y especias en una sartén. Remoja los chiles en agua caliente hasta que se ablanden.

        Paso 2:
           Licúa los chiles con especias, chocolate, plátano, y otros ingredientes para formar una pasta espesa.

        Paso 3:
           Cocina la pasta en una olla grande, agregando caldo de pollo poco a poco, hasta obtener la consistencia deseada.

        Paso 4:
           Cocina el pollo y añade la salsa de mole. Cocina a fuego lento hasta que el pollo esté bien impregnado de la salsa.

        Paso 5:
           Sirve el mole con arroz y tortillas.
           `,
    creator: "Luisa Hernandez",
    creator_email: "luisahernandez@example.com",
  },
  {
    title: "Pescado a la Talla",
    slug: "pescado-a-la-talla",
    image: "/images/pescado-a-la-talla.jpg",
    summary: "Sabroso pescado a la talla, marinado y asado a la perfección.",
    instructions: `
        Paso 1:
           Limpia y abre el pescado a la mitad. Sazona con sal y pimienta.

        Paso 2:
           Prepara una salsa de achiote, chiles, ajo y especias. Marina el pescado con esta mezcla.

        Paso 3:
           Asa el pescado a la parrilla, comenzando con el lado de la piel hacia abajo.

        Paso 4:
           Cocina hasta que el pescado esté dorado y bien cocido por ambos lados.

        Paso 5:
           Sirve el pescado con arroz, ensalada y tortillas.
           `,
    creator: "Pedro Ramirez",
    creator_email: "pedroramirez@example.com",
  },
  {
    title: "Pescado Veracruzano",
    slug: "pescado-veracruzano",
    image: "/images/pescado-a-la-veracruzana.jpg",
    summary:
      "Delicioso pescado a la veracruzana, con una rica salsa de jitomate, aceitunas y alcaparras.",
    instructions: `
        Paso 1:
           Sazona el pescado con sal y pimienta, y fríelo ligeramente en aceite. Reserva.

        Paso 2:
           Sofríe cebolla, ajo y pimientos. Añade jitomate picado, aceitunas, alcaparras y especias. Cocina hasta obtener una salsa espesa.

        Paso 3:
           Coloca el pescado en la salsa y cocina a fuego lento hasta que esté bien impregnado.

        Paso 4:
           Sirve el pescado con la salsa encima, acompañado de arroz blanco.
           `,
    creator: "Ana Torres",
    creator_email: "anatorres@example.com",
  },
  {
    title: "Pozole",
    slug: "pozole",
    image: "/images/pozole.jpeg",
    summary: "Reconfortante pozole, ideal para cualquier ocasión especial.",
    instructions: `
        Paso 1:
           Cocina maíz pozolero en una olla grande con agua, ajo y cebolla hasta que esté suave.

        Paso 2:
           Añade carne de cerdo y cocina hasta que esté bien cocida.

        Paso 3:
           Prepara una salsa con chiles secos, ajo y especias. Añádela al pozole.

        Paso 4:
           Cocina todo junto a fuego lento para que los sabores se integren.

        Paso 5:
           Sirve el pozole con lechuga, rábanos, cebolla, orégano, chile piquín y limón.
           `,
    creator: "Jose Perez",
    creator_email: "joseperez@example.com",
  },
  {
    title: "Tlayuda",
    slug: "tlayuda",
    image: "/images/tlayuda.jpg",
    summary: "Auténtica tlayuda oaxaqueña, crujiente y llena de sabor.",
    instructions: `
        Paso 1:
           Tuesta una tortilla grande en un comal hasta que esté crujiente.

        Paso 2:
           Unta la tortilla con frijoles refritos y añade carne asada, quesillo, aguacate y salsa.

        Paso 3:
           Añade repollo, tomate y cebolla al gusto.

        Paso 4:
           Dobla la tlayuda a la mitad y caliéntala un poco más en el comal.

        Paso 5:
           Sirve caliente, acompañada de salsa y limón.
           `,
    creator: "Rosa Sanchez",
    creator_email: "rosasanchez@example.com",
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();


async function initData() {
   const stmt = db.prepare(`
       INSERT INTO meals (
          slug,
          title,
          image,
          summary,
          instructions,
          creator,
          creator_email
       ) VALUES (
          @slug,
          @title,
          @image,
          @summary,
          @instructions,
          @creator,
          @creator_email
       )
    `);

    // Insertar los datos dummy
    for(const meal of dummyMeals){
       stmt.run(meal);
    }
}

// Inicializar los datos
initData();

