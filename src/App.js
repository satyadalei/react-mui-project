import './App.css';
import Button from '@mui/material/Button';
import MuiTypography from './components/MuiTypography';
function App() {
  return (
    <div className="App">
      <h1>Hello Everybody</h1>
      <Button variant="contained">Hello World</Button> <br /> <br />
      <Button variant="outlined">Hello World</Button>
      <MuiTypography/>
    </div>
  );
}

export default App;
