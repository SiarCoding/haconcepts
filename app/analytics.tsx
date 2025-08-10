import { headers } from 'next/headers';
import Script from 'next/script';
import { EU_COUNTRY_CODES } from '@/lib/constants';

export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

export default async function Analytics() {
  const headersList = await headers();
  const countryCode = headersList.get('x-vercel-ip-country') || 'US';

  if (EU_COUNTRY_CODES.includes(countryCode)) {
    return null;
  }

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="ga4"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
} 