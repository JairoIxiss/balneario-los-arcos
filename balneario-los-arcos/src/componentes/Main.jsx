const MainSection = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center text-[#F5EBE0] font-nunito px-4 relative" style={{backgroundImage: 'url("${baseUrl}main.png")', }}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Balneario Los Arcos
                </h1>
                <p className="text-sm md:text-base tracking-widest mb-6">
                    PURUÁNDIRO, MICHOACÁN
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                    Bienestar que brota de la tierra
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Descubre la magia de nuestras aguas termales de manantial
                    en el corazón de Puruándiro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                    <button className="bg-[#0077B6] hover:bg-[#001D32] text-[#F5EBE0] font-semibold py-3 px-8 rounded-lg transition  duration-300">
                        Reserva tu lugar
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/50 text-[#F5EBE0] font-semibold py-3 px-8 rounded-lg transition duration-300">
                        Explorar Servicios
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainSection