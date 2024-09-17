"use server";
import { saveMeal, uploadImage, getMealByTitle } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  // Extraer los campos del formulario
  const imageFile = formData.get("image");
  let title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const creator_email = formData.get("email");

  // Capitalizar el título
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  // Validaciones
  if (!imageFile) {
    return { message: "Debes seleccionar una imagen válida" };
  }

  if (!title || title.length < 3) {
    return { message: "El título debe tener al menos 3 caracteres" };
  }

  const existingMeal = await getMealByTitle(title);
  if (existingMeal) {
    return { message: "Ya existe una receta con ese título, elige otro" };
  }

  if (!summary || summary.length < 10) {
    return { message: "El resumen debe tener al menos 10 caracteres" };
  }

  if (!instructions || instructions.length < 20) {
    return { message: "Las instrucciones deben tener al menos 20 caracteres" };
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
  if (!emailPattern.test(creator_email)) {
    return { message: "Debes proporcionar un email válido" };
  }

  // Subir la imagen y guardar la receta si todo está bien
  const imagePath = await uploadImage(imageFile);

  const meal = {
    title, // El título ya está capitalizado
    summary,
    instructions,
    creator: formData.get("name"),
    creator_email,
    image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${imagePath}`,
  };

  await saveMeal(meal);

  revalidatePath("/meals");
  return { success: true };
}
