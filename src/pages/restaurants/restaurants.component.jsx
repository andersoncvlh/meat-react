import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { listRestaurants } from '../../services/restaurant.service';
import { useEffect, useState } from 'react'
import useRestaurantsStyles from './restaurants.styles';

export default function Restaurants() {
  const classes = useRestaurantsStyles();
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async () => {
    const list = await listRestaurants()
    setRestaurants(list)
  }

  useEffect(() => {
    loadRestaurants();
  }, [])

  return (
    <>
      {restaurants.map((restaurant) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {restaurant.category}
              </Typography>
              <Typography variant="h5" component="h2">
                {restaurant.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {restaurant.rating}
              </Typography>
              <Typography variant="body2" component="p">
               {restaurant.about}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Saiba mais</Button>
            </CardActions>
          </Card>
        )
      })}
      </>
  );
}
