import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Pradyumn",
    template: "%s | Pradyumn",
  },
  description: "Web Developer and CUDA enthusiast",
  openGraph: {
    title: "Pradyumn Shirsath",
    description: "Web Developer and CUDA enthusiast",
    url: "https://pradyumn.co.in",
    siteName: "Pradyumn",
    images: [
      {
        url: "https://pradyumn.co.in/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradyumn",
    description: "Web Developer and CUDA enthusiast",
    images: ["https://pradyumn.co.in/logo.png"],
  },
  icons: {
    shortcut: "/logo.png",
  },
};

const inter = LocalFont({
  src: "../public/fonts/alata-regular.ttf",
  // src: "../public/fonts/Forum-Regular.ttf",
  // public\fonts\arteks\Arteks Black.otf
  variable: "--font-inter",
  display :'swap'
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  // src: "../public/fonts/Baron-Neue/Baron Neue.otf",
  // src: "../public/fonts/devant-pro/Devant-Medium.ttf",
  // src: "../public/fonts/Forum-Regular.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
