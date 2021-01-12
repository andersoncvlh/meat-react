import { Route, Switch } from "react-router-dom"
import Home from "./pages/home/home.component"
import Restaurants from "./pages/restaurants/restaurants.component"
import RestaurantDetails from "./pages/restaurant-details/restaurant-details.component"

const Routes = () => {
  return (
    <Switch>
      <Route path="/restaurantes" >
        <Restaurants />
      </Route>
      <Route path="/sobre" >
        <h1>Sobre</h1>
      </Route>
      <Route path="/restaurantes-detalhe/:id" component={RestaurantDetails} />
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes