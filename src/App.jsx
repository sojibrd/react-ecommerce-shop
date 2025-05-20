import { Routes, Route } from "react-router";
import Home from "./routes/Home/home.component";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation.component";
import Categories from "./components/Categories/Categories.component";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="home" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
