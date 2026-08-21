import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Form } from './components/ReactForm';
import { ArtistDetails } from './pages/ArtistDetails';
import { Artists } from './pages/Artists';
import { Home } from './pages/Home';
import { Songs } from './pages/Songs';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B1E30] text-slate-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<Artists />} />
          <Route path="/artistas/:artistId" element={<ArtistDetails />} />
          <Route path="/musicas" element={<Songs />} />
          <Route
            path="/formulario"
            element={
              <main className="min-h-screen bg-[#0B1E30] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
                <Form />
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
