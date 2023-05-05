import { Container } from '@mui/material';
import './App.css';
import CustomerList from './CustomerList';
import TrainingList from './TrainingList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Container>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<CustomerList />} />
    <Route path="/trainings" element={<TrainingList />} />
    </Routes>
  </BrowserRouter>
  </Container>
    
  );
}

export default App;
