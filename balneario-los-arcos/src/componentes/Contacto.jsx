const Contacto = () => {
    return (
        <section id="contacto" className="bg-[#F5EBE0] py-8 font-nunito mx-auto px-5">
            <div>
                <h2 className="text-[#006875] font-bold text-2xl md:text-3xl mb-5">Contacto</h2>
                <div className="mb-10">
                    <div className=" bg-[#EBE1D6] rounded-3xl shadow-2xs p-3 flex flex-row items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-3xl! text-[#006875]">
                            location_on
                        </span>
                        <p>Carretera Puruándiro-Zináparo Km 2.5, Puruándiro, Michoacán</p>
                    </div>
                    <p className="mb-2 text-center">Realiza tu reservación en línea o contáctanos para más información:</p>
                    <div className=" bg-[#EBE1D6] rounded-3xl shadow-2xs p-3 flex flex-row items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-3xl! text-[#006875]">
                            call
                        </span>
                        <p>+ 52 (438) 000 0000</p>
                    </div>
                    <div className=" bg-[#EBE1D6] rounded-3xl shadow-2xs p-3 flex flex-row items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-3xl! text-[#006875]">
                            schedule
                        </span>
                        <p>Lunes a Domingo: 8:00 AM - 8:00 PM</p>
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.1162756576095!2d-101.4909107!3d20.0874257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c51b02982352d%3A0x80b0147192d5beb0!2sBalneario%20Los%20Arcos%20Ejido%20Puru%C3%A1ndiro!5e0!3m2!1ses-419!2smx!4v1784150375069!5m2!1ses-419!2smx"
                        className="w-full h-64 md:h-96 lg:h-[500px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Balneario Los Arcos - Ubicación en Puruándiro, Michoacán"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contacto;