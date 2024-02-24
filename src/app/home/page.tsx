import React from 'react';
import styles from './styles/home.module.css';
import Image from 'next/image';
import '../../globals.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.containerImageBackgroundGif}>
                    <Image
                        src="/gifs/gif.gif"
                        alt="backGroundGif"
                        width={480}
                        height={864}
                        className={styles.imageBackgroundGif}
                    />
                </div>
                <div className={styles.textOverlay}>
                    <h1>SOMOS ARGENSET</h1>
                    <div className={styles.containerButtonTextOverlay}>
                        <button className={styles.buttonTextOverlay}>
                            <p>
                                Conocenos
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.svgFlecha}>
                                <path d="M7 17L17 7" stroke="#D9DFED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M7 7H17V17" stroke="#D9DFED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button className={styles.buttonTextOverlay}>
                            <p>
                                Ver trabajos
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="#D9DFED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M7 7H17V17" stroke="#D9DFED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <main className={styles.mainContent}>
                <h2>Próximamente</h2>
            </main>
        </div>
    );
}
