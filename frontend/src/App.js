import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navigation from './components/Navigation.jsx';
import Mahasiswa from "./components/Mahasiswa.jsx"
import Mapel from "./components/Mapel.jsx"
import Tambah from "./components/Tambah.jsx"
import Edit from "./components/Edit.jsx"

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
          <Route path="mahasiswa" element={<Mahasiswa />}/>
          <Route path="mapel" element={<Mapel />} /> 
          <Route path="tambahmahasiswa" element={<Tambah />} /> 
          <Route path="edit/:id/:nimMhs" element={<Edit />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
