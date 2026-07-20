const Beneficios = () => {
    return (
        <section id="beneficios" className="w-full min-h-3/4 bg-cover bg-center bg-no-repeat flex flex-col text-[#F5EBE0] font-nunito px-4 relative" style={{ backgroundImage: 'url("/src/assets/manantial-2.png")', }}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-4xl py-20 px-5">
                <h2 className="text-3xl font-bold mb-6">El poder de los Minerales</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-row bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                        <span className="material-symbols-outlined text-4xl text-white">
                            Dermatology
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold mb-2">Salud de la Piel</h3>
                            <p>Los minerales ayudan a exfoliar y rejuvenecer las capas externas de la piel.</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                        <span className="material-symbols-outlined text-xl text-white">
                            self_improvement
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold mb-2">Relajación Muscular</h3>
                            <p>El calor y la preesión del agua alivian tensiones crónicas y dolores articulares.</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                        <span className="material-symbols-outlined text-4xl text-white">
                            hematology
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold mb-2">Mejora la Circulación</h3>
                            <p>Estimula el flujo sanguíneo y ayuda a eliminar toxinas del cuerpo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios;