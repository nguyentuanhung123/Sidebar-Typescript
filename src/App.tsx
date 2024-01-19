import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

//components
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { Overview, History, Users, Revenue, Order, Configuration } from "./pages/Overview/Overview";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/overview/users" element={<Users />}></Route>
          <Route path="/overview/revenue" element={<Revenue />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/configuration" element={<Configuration />}></Route>
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
