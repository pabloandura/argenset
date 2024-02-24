'use client'
import { useState, useEffect } from 'react';
import styles from './styles/navbar.module.css';

export default function NavBar() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [widthWindow, setWidthWindow] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            setIsAtTop(currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setWidthWindow(windowWidth);
            if (windowWidth > 1024) {
                setIsMenuOpen(false);
            }
        };

        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${styles.navbar} ${isAtTop ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <div className={styles.containerLogo}>
                    ARGENSET
                </div>
                {widthWindow > 1024 ? (
                    <div className={styles.menu}>
                        <ul>
                            <li>Inicio</li>
                            <li>Nosotros</li>
                            <li>Servicios</li>
                            <li>Trabajos</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                ) : (
                    <div className={styles.containerHamburguerMenu} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill="#ffffff"></path>
                        </svg>
                    </div>
                )}
                {isMenuOpen && (
                    <div className={styles.containerMenuDeployedHamburguer}>
                        <ul className={styles.menuDeployedHamburguer}>
                            <li>Inicio</li>
                            <li>Nosotros</li>
                            <li>Servicios</li>
                            <li>Trabajos</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
