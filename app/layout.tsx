import { Press_Start_2P, VT323, Nunito } from 'next/font/google';
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

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['800'],
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
    <html lang="id" className={`${pixelPrimary.variable} ${pixelSecondary.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
