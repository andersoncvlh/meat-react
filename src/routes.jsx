import { Route, Switch } from "react-router-dom"
import Home from "./pages/home/home.component"

const Routes = () => {
  return (
    <Switch>
      <Route path="/restaurantes" >
        <h1>Restaurantes</h1>
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