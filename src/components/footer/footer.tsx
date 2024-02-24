"use client"
import { oswald } from '@/fonts';
import styles from './styles/footer.module.css';
import Image from "next/image";

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.containerLogo}>
                ARGENSET
            </div>
            {/* <ul>
                <li>Menu</li>
                <li>Social Life</li>
                <li>Contacto</li>
            </ul> */}
        </div>
    );
}