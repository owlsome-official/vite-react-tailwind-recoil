import AboutPage from "pages/AboutPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
