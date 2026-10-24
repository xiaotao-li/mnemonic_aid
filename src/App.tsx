import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ConfigPage from './pages/ConfigPage';
import PracticePage from './pages/PracticePage';
import ErrorBookPage from './pages/ErrorBookPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/practice" replace />} />
          <Route path="config" element={<ConfigPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="errorbook" element={<ErrorBookPage />} />
          <Route path="stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
