const Experiencias = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <section id="experiencias" className="bg-white py-15 font-nunito mx-auto px-5">
            <div>
                <div className="mb-8">
                    <h2 className="text-2xl text-center text-balance text-[#006875] md:text-3xl font-bold mb-3">
                        Experiencias Diseñadas para Ti
                    </h2>
                    <p className="text-center">
                        Sumérgete en una variedad de servicios pensados para renovar tu cuerpo y espíritu.
                    </p>
                </div>
                <div className="py-5 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="max-w-xs bg-[#F5EBE0] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition duration-300 mb-4">
                        <div className="h-70">
                            <img className="w-full h-full object-cover" src="${baseUrl}albercas.png" alt="Albercas Termales" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-xl font-bold text-[#293417]">
                                Albercas Termales
                            </h3>
                            <p className="text-justify pr-10 text-[#293417]">
                                Múltiples albercas con diferentes profundidades y temperaturas naturales, como también chapoteadero para los más pequeños de la familia.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-[#F5EBE0] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition duration-300 mb-4">
                        <div className="h-70">
                            <img className="w-full h-full object-cover" src="${baseUrl}restaurante.png" alt="Restaurante Tradicional" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-xl font-bold text-[#293417]">
                                Restaurante Tradicional
                            </h3>
                            <p className="text-justify pr-10 text-[#293417]">
                                El auténtico sabor de la región, con la mejor calidad de ingredientes locales.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-[#F5EBE0] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition duration-300 mb-4">
                        <div className="h-70">
                            <img className="w-full h-full object-cover" src="${baseUrl}area-verde.png" alt="Albercas Termales" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-xl font-bold text-[#293417]">
                                Áreas Verdes
                            </h3>
                            <p className="text-justify pr-10 text-[#293417]">
                                Espacios verdes para relajarse y disfrutar de distintas actividades.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-[#F5EBE0] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition duration-300 mb-4">
                        <div className="h-70">
                            <img className="w-full h-full object-cover" src="${baseUrl}tienda.png" alt="Albercas Termales" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-xl font-bold text-[#293417]">
                                Tienda de Abarrotes
                            </h3>
                            <p className="text-justify pr-10 text-[#293417]">
                                El mejor surtido en productos y amenidades para disfrutar de la estancia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiencias