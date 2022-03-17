import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/actions/index";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
      <Container fixed>
          <Typography variant="h1" component="h2" align="center" style={{color:"green", marginTop:'1rem'}}> 
              Counter: {store}
          </Typography>
          <Stack spacing={2} direction="row" align="center">
              <Button variant="contained" onClick={() => dispatch(increment())}>Plus</Button>
              <Button variant="contained" onClick={() => dispatch(decrement())}>Minus</Button>
          </Stack>
      </Container>

  );
}

export default App;
