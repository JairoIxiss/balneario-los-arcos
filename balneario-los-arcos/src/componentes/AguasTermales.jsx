const AguasTermales = () => {
    return (
        <section id="aguas-termales" className="bg-[#F5EBE0] py-15 font-nunito mx-auto px-10">
            <div className="flex flex-col justify-center items-center">
                <div className="mb-8">
                    <h2 className="text-[#006875] font-bold text-xl md:text-3xl mb-2">
                        TRADICIÓN NATURAL
                    </h2>
                    <h3 className="text-[#3F4B2C] font-semibold text-xl md:text-2xl mb-4">
                        Nacida del Corazón de la Naturaleza
                    </h3>
                    <p className="text-justify">
                        El Balneario Los Arcos nace de una tradición de cuidado y respeto por los recursos naturales de Puruándiro. Nuestras aguas brotan directamente de mantos acuíferos profundos, conservando una temperatura constante y una pureza mineral inigualable.
                    </p>
                </div>
                <div className="mb-8 w-full max-w-xs">
                    <img className="rounded-3xl shadow-xl" src="/manantial.png" alt="Manantial de Aguas Termales" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-[#EBE1D6] rounded-3xl shadow-2xs flex flex-col justify-center items-center p-3">
                        <div className="text-center font-bold text-[#2A828F]">
                            38°C
                        </div>
                        <div className="text-center">
                            Temperatura <br /> Promedio
                        </div>
                    </div>
                    <div className="bg-[#EBE1D6] rounded-3xl shadow-2xs flex flex-col justify-center items-center">
                        <div className="text-center font-bold text-[#2A828F]">
                            50 +
                        </div>
                        <div className="text-center">
                            Años de <br /> Historia
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AguasTermales