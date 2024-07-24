import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from './Routes/Dashboard';

import { ROUTES } from './Routes.constants';

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path={ROUTES.TOSSING} index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
