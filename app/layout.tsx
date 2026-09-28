import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Sanskar Jyotish Sagar | Vedic Astrology & Spiritual Guidance",
    template: "%s | Sanskar Jyotish Sagar",
  },

  description:
    "Sanskar Jyotish Sagar offers Vedic astrology consultations, Kundli analysis, Kundli matching, Pooja services, Jyotish guidance and spiritual solutions rooted in traditional Vedic wisdom.",

  keywords: [
    "Sanskar Jyotish Sagar",
    "Vedic Astrology",
    "Jyotish",
    "Kundli",
    "Kundli Matching",
    "Birth Chart",
    "Kundli Analysis",
    "Astrology Consultation",
    "Pooja",
    "Vedic Remedies",
    "Spiritual Guidance",
    "Sanatan Dharma",
    "Astrologer India",
  ],

  authors: [
    {
      name: "Sanskar Jyotish Sagar",
    },
  ],

  creator: "Sanskar Jyotish Sagar",
  publisher: "Sanskar Jyotish Sagar",

  metadataBase: new URL("https://your-domain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.com",
    siteName: "Sanskar Jyotish Sagar",
    title: "Sanskar Jyotish Sagar | Vedic Astrology & Spiritual Guidance",
    description:
      "Explore Vedic astrology, Kundli consultations, Kundli matching, Pooja services and traditional spiritual guidance.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanskar Jyotish Sagar - Vedic Astrology & Spiritual Guidance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanskar Jyotish Sagar | Vedic Astrology",
    description:
      "Vedic astrology consultations, Kundli analysis, Pooja services and spiritual guidance.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
