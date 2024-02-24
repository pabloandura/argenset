import type { Metadata } from 'next';
import { montserrat, inter, oswald } from '@/fonts';
import '../globals.css';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import '../fonts';


export const metadata: Metadata = {
    title: "Coming Soon",
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
          <body className={inter.className}>
              <NavBar/>
              {children}
              <Footer/>
          </body>
    </html>
  );
}