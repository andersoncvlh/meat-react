import { Route, Switch } from "react-router-dom"
import Home from "./pages/home/home.component"
import Restaurants from "./pages/restaurants/restaurants.component"

const Routes = () => {
  return (
    <Switch>
      <Route path="/restaurantes" >
        <Restaurants />
      </Route>
      <Route path="/sobre" >
        <h1>Sobre</h1>
      </Route>
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes