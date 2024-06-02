"use client";
import { useState, useEffect } from "react";
import styles from "./styles/navbar.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { ActionIcon, Button, Flex, Menu } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [widthWindow, setWidthWindow] = useState(0);
  const [opened, setOpened] = useState(false);

  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    setIsAtTop(currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setWidthWindow(windowWidth);
    if (windowWidth > 1024) {
      setOpened(false);
    }
  };

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const isDesktop = !useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${isAtTop ? styles.hidden : ""}`}>
      <div className={styles.content}>
        <div className={styles.containerLogo}>ARGENSET</div>
        {isDesktop ? (
          <div className={styles.menu}>
            <Flex className={styles.desktopNavContainer}>
              <Link className={styles.desktopNavItem} href="/">
                Inicio
              </Link>
              <Link className={styles.desktopNavItem} href="/nosotrxs">
                Nosotrxs
              </Link>
              <Link className={styles.desktopNavItem} href="/servicios">
                Servicios
              </Link>
              <Link className={styles.desktopNavItem} href="/trabajos">
                Trabajos
              </Link>
              <Link className={styles.desktopNavItem} href="/contacto">
                Contacto
              </Link>
            </Flex>
          </div>
        ) : (
          <Menu opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div>

              <ActionIcon
                className={styles.containerHamburguerMenu}
                onClick={toggleMenu}
                color="black"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  >
                  <path
                    d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                    fill="#ffffff"
                    ></path>
                </svg>
              </ActionIcon>{" "}
                    </div>
            </Menu.Target>

            <Menu.Dropdown bg='lightgray'>
              <Menu.Item>
                <Link className={styles.mobileNavItem} href="/">
                  Inicio
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={styles.mobileNavItem} href="/nosotrxs">
                  Nosotrxs
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={styles.mobileNavItem} href="/servicios">
                  Servicios
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={styles.mobileNavItem} href="/trabajos">
                  Trabajos
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={styles.mobileNavItem} href="/contacto">
                  Contacto
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </div>
    </div>
  );
}
