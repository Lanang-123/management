import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/mahasiswa" element=""/>
          <Route path="/mapel" element="" /> 
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
