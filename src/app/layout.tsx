import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Software Development Company | Web, Mobile & AI Solutions",
  description: "Leading software development company specializing in web applications, mobile apps, Windows software, and AI solutions. Transform your business with cutting-edge technology.",
  keywords: "software development company, custom software solutions, web development, mobile app development, AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Solutions', ariaLabel: 'View our services', link: '/solutions' },
    { label: 'Careers', ariaLabel: 'Work with us', link: '/careers' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: '#' },
    { label: 'Twitter', link: '#' },
    { label: 'GitHub', link: '#' },
    { label: 'Dribbble', link: '#' },
    { label: 'Instagram', link: '#' }
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StaggeredMenu
          items={menuItems}
          socialItems={socialItems}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
