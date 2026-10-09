import type { Metadata } from 'next';
import './globals.css';
import { MILL_INFO } from '@/data/millInfo';

export const metadata: Metadata = {
  title: 'KR Flour Rice and Oil Mill | Mullassery, Venkitangu, Kerala',
  description:
    'Traditional stone grain milling, pure cold-pressed coconut oil extraction, and freshly ground spices in Mullassery (near Venkitangu), Thrissur District, Kerala.',
  keywords: [
    'KR Flour Rice and Oil Mill',
    'Mullassery flour mill',
    'Venkitangu rice mill',
    'coconut oil mill Thrissur',
    'stone ground atta Kerala',
    'pure chilli powder Mullassery',
    'cold pressed copra oil Kerala',
    'puttu podi Venkitangu',
    'chakki atta Thrissur',
  ],
  authors: [{ name: 'KR Flour Rice and Oil Mill' }],
  metadataBase: new URL('https://krmill.in'),
  openGraph: {
    title: 'KR Flour Rice and Oil Mill | Mullassery, Kerala',
    description:
      'Traditional grain milling, cold-pressed copra oil, and pure ground spices in Mullassery near Venkitangu, Kerala.',
    url: 'https://krmill.in',
    siteName: 'KR Flour Rice and Oil Mill',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: MILL_INFO.businessName,
    alternateName: MILL_INFO.malayalamName,
    description: MILL_INFO.tagline,
    url: 'https://krmill.in',
    telephone: MILL_INFO.primaryPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Road, Mullassery, Near Venkitangu',
      addressLocality: 'Mullassery',
      addressRegion: 'Kerala',
      postalCode: MILL_INFO.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.56475',
      longitude: '76.05943',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '07:30',
        closes: '19:00',
      },
    ],
    hasMap: MILL_INFO.googleMapShareUrl,
    priceRange: '₹',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-mill-cream text-mill-ink selection:bg-mill-terracotta selection:text-mill-cream antialiased">
        {children}
      </body>
    </html>
  );
}
