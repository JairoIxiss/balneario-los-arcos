import { useEffect } from 'react';

const Reviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.featurable.com/widget/v2/embed.js';
        script.defer = true;
        script.charset = 'UTF-8';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="reviews" className="py-18">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#293417] mb-3">
                        Opiniones de nuestros visitantes
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Descubre lo que otros viajeros dicen sobre su experiencia
                    </p>
                </div>
                <div className="">
                    <div
                        id="featurable-c29fb97e-66dc-486b-af93-f13e35500cf9"
                        data-featurable-async
                        data-location-code="es"
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Reviews;