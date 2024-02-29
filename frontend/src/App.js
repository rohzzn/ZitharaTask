import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersList from './CustomerList';

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