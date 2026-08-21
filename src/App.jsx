import { Header } from './components/Header';
import { Hero } from './components/Hero'

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-slate-100 flex flex-col">
            <Header />
            <Hero />
        </div>
    );
}

export default App;