import {BrowserRouter, Route} from "react-router-dom";
import AldbMeals from "./AldbMeals";
import AldbMealDetails from "./AldbMealDetails";
import AldbListFoundMeals from "./AldbListFoundMeals";
import AldbIngredients from "./AldbIngredients";


function App() {
    return (
        <BrowserRouter>
            {/*<Route exact path="/"><Meals /></Route>*/}
            {/*<Route path="/meal/:id"><MealDetails /></Route>*/}
            <Route exact path="/"><AldbMeals /></Route>
            <Route path="/meal/:title"><AldbMealDetails /></Route>
            <Route path="/browse/:name"><AldbListFoundMeals /></Route>
            <Route path="/ingredient/:name"><AldbIngredients /></Route>
        </BrowserRouter>
    )
}
    export default App;


