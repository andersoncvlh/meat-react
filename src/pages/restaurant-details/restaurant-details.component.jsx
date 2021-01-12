import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Tab, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import { TabContext, TabList } from '@material-ui/lab';
import { getByIdRestaurant } from '../../services/restaurant.service';
import {getRestaurantMenu} from '../../services/menu.service.js';
import useRestaurantDetailStyles from './restaurant-details.style';

export default function RestaurantDetails({ match }) {
  const restaurantId = match.params.id
  const [value, setValue] = React.useState("0")
  const [restaurant, setRestaurant] = React.useState()
  const [products, setMenu] = React.useState()
  


  function handleChange(event, newValue) {
    setValue(newValue)
  }

  const getRestaurant = async (id) => {
    const item = await getByIdRestaurant(id)
    setRestaurant(item) 
  }

  const showRestaurantMenu = async (id) => {
      const products = await getRestaurantMenu(id)
      setMenu(products)
  }

  useEffect(() => {
    getRestaurant(restaurantId)
    showRestaurantMenu(restaurantId)
  }, [restaurantId])

  const classes = useRestaurantDetailStyles()

  return (
    <>
      <h1>{restaurant?.name}</h1>
      <h4>{restaurant?.about}</h4>
      
      <TabContext value={value}>
        <AppBar position="static">
          <TabList  onChange={handleChange} aria-label="simple tabs example" >
            <Tab label="Menu" value="0" aria-controls="a11y-tabpanel-0" id="a11y-tab-0" />
            <Tab label="Avaliações" value="1" aria-controls="a11y-tabpanel-1" id="a11y-tab-1" />
          </TabList>
        </AppBar>
        <TabPanel value="0">
          
          {products?.map((menu) => {
            return (
            
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    src="../../assets/img/restaurants/breadbakery.png"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {menu?.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {menu?.description}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {`R$ ${menu?.price}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Adicionar no carrinho
                </Button>
                </CardActions>
              </Card>
            )
          })}
        </TabPanel>

        <TabPanel value="1">
          Avaliações
        </TabPanel>
      </TabContext>
      
    
    </>
  );
}
