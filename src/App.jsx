
import { makeStyles } from "@mui/styles";
import { Router } from "./Router";


const useStyles = makeStyles(() => ({
  page: {
    backgroundColor: 'lightgray',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Router />
    </div>
  );
}

export default App;
