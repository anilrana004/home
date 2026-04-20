import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { SITE } from '@/data/site'
import '@/styles/globals.css'

// ── Fonts ──────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

// ── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'The Alpine Homestay, Jakhol | Uttarkashi, Uttarakhand',
    template: '%s | The Alpine Homestay Jakhol',
  },
  description: SITE.description,
  keywords: [
    'alpine homestay jakhol',
    'uttarkashi homestay',
    'jakhol village stay',
    'govind wildlife sanctuary',
    'best adventure tourism village 2024',
    'har ki dun trek base',
    'kedarkantha trek stay',
    'uttarakhand homestay',
    'garhwal himalaya retreat',
    'naitwar mori uttarkashi',
  ],
  authors: [{ name: 'Rajnath Singh Rawat', url: SITE.url }],
  creator: 'Rajnath Singh Rawat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.shortName,
    title: 'The Alpine Homestay, Jakhol | Uttarkashi, Uttarakhand',
    description:
      'Award-winning wooden mountain retreat in Jakhol, Uttarkashi. Best Adventure Tourism Village 2024. 60 rooms, all meals included, trek base camp inside Govind Wildlife Sanctuary.',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'The Alpine Homestay Jakhol' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Alpine Homestay, Jakhol | Uttarkashi',
    description: 'Best Adventure Tourism Village 2024. Wooden retreat inside Govind Wildlife Sanctuary.',
    images: [SITE.ogImage],
  },
  alternates: {
    canonical: SITE.url,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  other: {
    'geo.region': 'IN-UT',
    'geo.placename': 'Jakhol, Uttarkashi, Uttarakhand',
    'geo.position': '31.016;78.098',
    ICBM: '31.016, 78.098',
  },
}

export const viewport: Viewport = {
  themeColor: '#3A2518',
  width: 'device-width',
  initialScale: 1,
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LodgingBusiness',
      '@id': `${SITE.url}/#lodging`,
      name: SITE.name,
      alternateName: 'Alpine Homestay Jakhol',
      description:
        'Award-winning wooden mountain homestay in Jakhol village, Uttarkashi. Best Adventure Tourism Village 2024. Inside Govind Wildlife Sanctuary with 60 rooms, all meals included, and trek base camp access.',
      url: SITE.url,
      priceRange: '₹1600 per person per night',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI',
      numberOfRooms: 60,
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Breakfast Included', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Lunch Included', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dinner Included', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Hot Water', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Bonfire', value: true },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      image: [SITE.ogImage],
      starRating: { '@type': 'Rating', ratingValue: '5' },
      award: 'Best Adventure Tourism Village 2024 — Government of India',
      checkinTime: '12:00',
      checkoutTime: '11:00',
      petsAllowed: false,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the tariff at The Alpine Homestay Jakhol?',
          acceptedAnswer: { '@type': 'Answer', text: '₹1,600 per person per night, inclusive of all meals. Children 0–6 complimentary. Children 7–12 at 50%.' },
        },
        {
          '@type': 'Question',
          name: 'How many rooms does The Alpine Homestay Jakhol have?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Alpine Homestay Jakhol has 60 rooms, each accommodating 3–4 guests.' },
        },
        {
          '@type': 'Question',
          name: 'How to reach Jakhol from Dehradun?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bus to Purola (~6h), then shared jeep to Jakhol (~2h, 66 km). Jolly Grant Airport is 223 km. Dehradun Railway Station is 199 km.' },
        },
        {
          '@type': 'Question',
          name: 'Which treks can be done from The Alpine Homestay Jakhol?',
          acceptedAnswer: { '@type': 'Answer', text: 'Devkyara Bugal Trek, Bardsar Trek, Har Ki Dun, Kedarkantha, Bali Pass, Borasu Pass, Ruinsara Lake, Chaainsheel Bugyal, Pushtar Bugyal, and Vijay Top.' },
        },
      ],
    },
  ],
}

// ── Root Layout ────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* LCP preload — hero image */}
        <link
          rel="preload"
          as="image"
          href="/back/adventure.webp"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans bg-warm text-text overflow-x-hidden antialiased">
        {children}

        {/* Google Analytics 4 — Replace G-XXXXXXXXXX with real ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.gaId}', { send_page_view: true });
          `}
        </Script>
      </body>
    </html>
  )
}
