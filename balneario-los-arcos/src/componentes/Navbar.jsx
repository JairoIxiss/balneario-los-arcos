import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { IconMenu2, IconX, IconCalendarEvent } from "@tabler/icons-react";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const atTop = currentScrollY < 10;

            setIsAtTop(atTop);

            if (atTop) {
                setIsVisible(true);
                setLastScrollY(currentScrollY);
                return;
            }

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleLinkClick = () => {
        setMenuAbierto(false);
    };

    const navbarClasses = `
        fixed top-0 left-0 right-0 z-50
        bg-[#F5EBE0] w-full shadow-xl
        transition-transform duration-300 ease-in-out
        ${isAtTop ? 'translate-y-0' :
            !isVisible ? '-translate-y-full' : 'translate-y-0'}
    `;

    return (
        <nav className={navbarClasses}>
            <div className="h-16 flex items-center px-4 justify-between">
                <button onClick={() => setMenuAbierto(!menuAbierto)} className="md:hidden">
                    {menuAbierto ? (
                        <IconX size={24} />
                    ) : (
                        <IconMenu2 size={24} />
                    )}
                </button>
                <Link to="/" className="font-bold text-xl text-[#293417]">
                    Los Arcos
                </Link>
                <HashLink smooth to="/#contacto" onClick={handleLinkClick} className="md:hidden">
                    <IconCalendarEvent size={24} />
                </HashLink>
            </div>
            {menuAbierto && (
                <div className="md:hidden absolute left-2 top-20 z-50 bg-[#F5EBE0] rounded-3xl shadow-2xl border border-white/30 p-2 min-w-50">
                    <div className="flex flex-col">
                        <HashLink
                            smooth
                            to="/#aguas-termales"
                            className="text-[#293417] hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-b-none border-b border-yellow-900"
                            onClick={handleLinkClick}
                        >
                            Aguas Termales
                        </HashLink>

                        <div className=" border-amber-200/50 mt-1 pt-1">
                            <HashLink
                                smooth
                                to="/#experiencias"
                                className="text-[#293417] hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-b-none block border-b border-yellow-900"
                                onClick={handleLinkClick}
                            >
                                Servicios
                            </HashLink>
                            <HashLink
                                smooth
                                to="/#beneficios"
                                className="text-[#293417] hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-b-none block border-b border-yellow-900"
                                onClick={handleLinkClick}
                            >
                                Beneficios Minerales
                            </HashLink>
                            <HashLink
                                smooth
                                to="/#reviews"
                                className="text-[#293417] hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-b-none block border-b border-yellow-900"
                                onClick={handleLinkClick}
                            >
                                Reseñas
                            </HashLink>
                            <HashLink
                                smooth
                                to="/#contacto"
                                className="text-[#293417] hover:bg-amber-200/50 transition-colors duration-200 text-base px-4 py-3 rounded-2xl block"
                                onClick={handleLinkClick}
                            >
                                Contacto
                            </HashLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;