import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Main";
import CafeDetails from "./Pages/Details";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />           
          <Route path="details/:location/:id" element={<CafeDetails />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
