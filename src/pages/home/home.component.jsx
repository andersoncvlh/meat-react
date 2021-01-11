import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

const Home = () => {

  const classes = useStyles();
  const history = useHistory();
  const navigate = () => {
    history.push("/restaurantes")
  }

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper} spacing="6">
          <Typography component="h1" variant="h3" align="center">
          Bem vindo ao Meat!
          </Typography>
          <Typography component="h1" variant="h6" align="center">
            Está com fome? Peça e receba em casa.
          </Typography>
          <Button className={classes.button} variant="contained" color="primary" onClick={navigate} >Ver restaurantes</Button>
        </Paper>
      </main>
    </>
  )
}

export default Home