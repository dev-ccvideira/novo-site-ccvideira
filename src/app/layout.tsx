import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { seoDefaults, siteSettings } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(seoDefaults.url),
  title: {
    default: "CCVideira - Uma Igreja, Uma Casa",
    template: "%s | CCVideira"
  },
  description: siteSettings.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CCVideira",
    title: "CCVideira - Uma Igreja, Uma Casa",
    description: siteSettings.description,
    url: seoDefaults.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "CCVideira - Comunidade Cristã Videira",
    url: absoluteUrl("/"),
    email: siteSettings.email,
    telephone: siteSettings.phone
  };

  return (
    <html lang="pt-BR">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        ) : null}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
