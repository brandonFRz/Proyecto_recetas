import { createClient } from '@supabase/supabase-js';
import slugify from "slugify";
import xss from "xss";

//inicializa la base de datos SQLite 
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

//Función para obtener todas las recetas de la base de datos
export async function getMeals() {
  const { data, error } = await supabase.from('meals').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
//Función para obtener una receta especifica usando el slug
export async function getMeal(slug) {
  const { data, error } = await supabase
    .from('meals')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getMealByTitle(title){
  const {data, error} = await supabase
  .from('meals')
    .select('id')
    .eq('title', title)
    .single();

    return data//Devuelve la receta si existe.
}

//Subir la imagen a la base de datos
 export async function uploadImage(file) {
  const { data, error } = await supabase.storage
    .from('images') // Aquí defines el bucket donde almacenarás las imágenes
    .upload(`${Date.now()}_${file.name}`, file);
  if (error) {
    throw new Error('Error al subir la imagen: ' + error.message);
  }

  return data.path; 
}



// Función para guardar una nueva receta en la base de datos
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // Sanitiza las instrucciones

  // Inserta la nueva receta y devuelve la fila insertada
  const { data, error } = await supabase  
    .from('meals')
    .insert([
      {
        title: meal.title.charAt(0).toUpperCase() + meal.title.slice(1).toLowerCase(),
        summary: meal.summary,
        instructions: meal.instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        image: meal.image,
        slug: meal.slug,
      },
    ])
    .select();  // Esto asegura que la fila insertada sea devuelta

  if (error) {
    throw new Error(error.message);
  }

  return data;
}