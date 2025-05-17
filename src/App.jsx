import { Routes, Route } from "react-router";
import Home from "./routes/Home/home.component";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation.component";
import Categories from "./components/Categories/Categories.component";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
