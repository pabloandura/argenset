import type { Metadata } from 'next';
import { montserrat, inter, oswald } from '@/fonts';
import '../globals.css';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { createTheme, MantineProvider } from '@mantine/core';
import '../fonts';
import '@mantine/core/styles.css';


export const metadata: Metadata = {
    title: "ARGENSET",
    description: "Page about Messi",
    icons: {
        icon: [
            '/favicon.icon?v=4'
        ],
        apple: [
            'apple-touch-icon.png?v=4'
        ],
        shortcut: [
            '/apple-touch-icon.png'
        ]
    },
    manifest:'/site.webmanifest'
};

export default function RootLayout({ //Ruta raíz
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
            <MantineProvider>
          <body className={inter.className}>
              <NavBar/>
              {children}
              <Footer/>
          </body>
          </MantineProvider>

    </html>
  );
}