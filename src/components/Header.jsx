export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between gap-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
            <div className="flex items-center space-x-2">
                <a href="#inicio" className="cursor-pointer">
                    <img className="size-16" src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/cline.png" alt="" />
                </a>
            </div>

            <nav className="flex items-center space-x-2 sm:space-x-4">
                <a
                    className="px-4 py-2 rounded-lg text-base font-semibold transition-colors text-white hover:bg-white/10">
                    Início
                </a>
                <a
                    className="px-4 py-2 rounded-lg text-base font-semibold transition-colors text-white hover:bg-white/10">
                    Artistas
                </a>
                <a
                    className="px-4 py-2 rounded-lg text-base font-semibold transition-colors text-white hover:bg-white/10">
                    Musicas
                </a>
                <a
                    className="px-4 py-2 rounded-lg text-base font-semibold transition-colors text-white hover:bg-white/10">
                    Formulario
                </a>
            </nav>
        </header>
    );
}