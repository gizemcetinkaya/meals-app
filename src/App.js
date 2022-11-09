import Header from "./components/Layout/Header";
import './App.scss';
import Footer from "./components/Layout/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";

function App() {

  return (
    <>
      <Header />
      <main className="container my-5 py-5 lg:px-5 mx-auto">
        <Routes>
          <Route path='/' exact element={<Navigate to='/home' />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/category/:categoryName' element={<Categories />} />
          <Route path='/meal/:mealId' element={<MealDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
