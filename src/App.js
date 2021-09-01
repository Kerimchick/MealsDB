import {BrowserRouter, Route} from "react-router-dom";
import AldbMeals from "./views/Meals/AldbMeals";
import AldbMealDetails from "./views/MealDetails/AldbMealDetails";
import AldbListFoundMeals from "./views/ListFoundMeals/AldbListFoundMeals";
import AldbIngredients from "./views/Ingredients/AldbIngredients";
import AldbSortMeals from "./views/SortMeals/AldbSortMeals";
import AldbCountriesMeals from "./views/CountriesMeals/AldbCountriesMeals";


function App() {
    return (
        <BrowserRouter>
            <Route exact path="/"><AldbMeals /></Route>
            <Route path="/meal/:title"><AldbMealDetails /></Route>
            <Route path="/browse/:name"><AldbListFoundMeals /></Route>
            <Route path="/ingredient/:name"><AldbIngredients /></Route>
            <Route path="/browse_sort/:symbol"><AldbSortMeals /></Route>
            <Route path="/browse_country/:name"><AldbCountriesMeals /></Route>
        </BrowserRouter>
    )
}
    export default App;


