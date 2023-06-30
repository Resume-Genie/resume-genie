import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

import './App.css';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
