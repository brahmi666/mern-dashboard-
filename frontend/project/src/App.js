import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import "./components/table.css";
import "./components/style.css";
import Template from "./components/template";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import ClientStats from "./components/ClientStats";
import Login from './components/login';
import Register from './components/signup';
import Admin from './components/Admin';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Template/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/table" element={<Tables/>}> </Route>
          <Route path="/graph" element={<Charts/>}> </Route>
          <Route path="/clients" element={<ClientStats/>}> </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
