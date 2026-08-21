import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Form } from './components/ReactForm';
import { ArtistDetails } from './pages/ArtistDetails';
import { Artists } from './pages/Artists';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Songs } from './pages/Songs';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-[#0B1E30] transition-colors dark:bg-[#0B1E30] dark:text-slate-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<Artists />} />
          <Route path="/artistas/:artistId" element={<ArtistDetails />} />
          <Route path="/musicas" element={<Songs />} />
          <Route
            path="/formulario"
            element={
              <main className="min-h-screen bg-slate-100 px-4 pb-16 pt-28 transition-colors dark:bg-[#0B1E30] sm:px-6 lg:px-8">
                <Form />
              </main>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
