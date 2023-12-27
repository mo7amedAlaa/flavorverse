import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App bg-black  selection:text-green-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
