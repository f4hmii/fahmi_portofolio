import { Press_Start_2P, VT323, Archivo_Black } from 'next/font/google';
import './globals.css';

const pixelPrimary = Press_Start_2P({ 
  subsets: ['latin'],
  variable: '--font-pixel-primary',
  weight: '400',
});

const pixelSecondary = VT323({
  subsets: ['latin'],
  variable: '--font-pixel-secondary',
  weight: '400',
});

const archivo = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: '400',
});

export const metadata = {
  title: 'Portofolio Fahmi | Web Developer',
  description: 'Portofolio web developer dengan desain Neubrutalism yang interaktif dan menarik.',
  icons: {
    icon: '/image/zsPorto.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${pixelPrimary.variable} ${pixelSecondary.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
