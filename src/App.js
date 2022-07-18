import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes/Routes';
import { Provider } from 'react-redux'
import Store from './Redux/Store';
import { Container } from '@mui/material';

function App() {
  return (
  <div className={`App`}>
      <Provider store={Store}>
        <Container className={'centerItems'}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
