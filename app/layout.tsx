import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--chakra-fonts-body',
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: 'Portofolio Fahmi | Web Developer',
  description: 'Portofolio web developer dengan desain Neubrutalism yang interaktif dan menarik.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
