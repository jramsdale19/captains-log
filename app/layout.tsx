import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // Import the new client layout component

// Load your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Set up metadata
export const metadata: Metadata = {
  title: "Captain's Log",
  description: "The ledger from the captain of the Harbinger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Use the client layout for rendering the navigation bar and page content */}
        <ClientLayout>
          {children} {/* Render the page content */}
        </ClientLayout>
      </body>
    </html>
  );
}

