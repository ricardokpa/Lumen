import type { Metadata } from 'next';
import { Archivo_Narrow, Azeret_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-azeret-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jessica Wolff Huerta | Brand Strategist',
  description: 'Brand strategist con más de 20 años trabajando con marcas de hospitalidad en todo el mundo.',
};

// Contenido de navegación y contacto reutilizado por Header y Footer
const navLinks = [{ label: 'Work Together', href: '/work' }];

const contactLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/34633851467' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jessicawolff/' },
  { label: 'Email', href: 'mailto:hello@jesswolff.com' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivoNarrow.variable} ${azeretMono.variable}`}>
      <body>
        <Header
          logoText="Jessica Wolff Huerta"
          logoHref="/"
          navLinks={navLinks}
          contactLinks={contactLinks}
        />

        {children}

        <Footer
          links={contactLinks.slice().reverse()}
          copyrightText="Jessica Huerta® All Rights Reserved."
        />
      </body>
    </html>
  );
}
