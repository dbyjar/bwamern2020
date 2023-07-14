import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import "./assets/scss/style.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
