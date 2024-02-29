import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersList from './CustomersList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;