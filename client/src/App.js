import { BrowserRouter } from 'react-router-dom';

import './App.css';
import AnimatedRoutes from './component/AnimatedRoutes';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
