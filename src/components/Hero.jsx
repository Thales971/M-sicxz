export function Hero() {
    return (
        <main
            id="inicio"
            className="relative w-full min-h-screen flex flex-col justify-start items-start px-8 md:px-16 pt-32 pb-16">
            <div className="w-full max-w-4xl py-15 relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-5">
                    <div className="flex flex-col justify-center py-10">
                        <p className="text-lg font-semibold text-white">Melhores faixas</p>
                        <h1 className="text-3xl md:text-5xl py-2.5 font-extrabold text-white uppercase tracking-tight">
                            MUSICAS EM ALTA
                        </h1>

                        <div className="gap-4 flex justify-start items-center pt-4">
                            <button className="bg-[#51AFF7] hover:bg-blue-400 px-6 py-3 rounded-3xl font-semibold text-black transition-colors cursor-pointer shadow-[0_0_15px_rgba(81,175,247,0.4)]">
                                Veja todas
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-110 bg-red-800  flex justify-center items-center gap-10">
                <div>

                </div>

            </div>
        </main>
    );
}