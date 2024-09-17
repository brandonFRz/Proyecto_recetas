import clasess from './meals-grid.module.css'
import MealItem from "./meal-item";

//Renderiza cada comida en un conjunto aplicando estilos
export default function MealsGrid({ meals }) {
  return (
    <ul className={clasess.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
