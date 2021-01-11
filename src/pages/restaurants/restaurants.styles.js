import { makeStyles } from "@material-ui/core";

const useRestaurantsStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: "inline-flex",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default useRestaurantsStyles;
