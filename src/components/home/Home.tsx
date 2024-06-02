import React from "react";
import styles from "./styles/home.module.css";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home({titulo}: {
    titulo: string
}) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerImageBackgroundGif}>
          <Image
            src="/gifs/gif.gif"
            alt="produccion argenset"
            width={480}
            height={864}
            className={styles.imageBackgroundGif}
          />
        </div>
        <div className={styles.textOverlay}>
            <div className={styles.titleGroup}>

          <h1 className={`${SpaceGrotesk.className} grotesk`}>
            {titulo}{" "}
          </h1>
          <span
            style={{
                fontFamily: "arial",
            }}
            >
            ___________
          </span>
              </div>
          <main className={styles.mainContent}>
            <Link href="/nosotrxs" className={`grotesk ${styles.homeHeroLink}`}>
              Nosotrxs.
            </Link>
            <Link href="/trabajos" className={`grotesk ${styles.homeHeroLink}`}>
              Ver trabajos.
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
}