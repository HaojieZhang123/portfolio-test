import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
