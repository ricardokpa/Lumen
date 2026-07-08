import type { Metadata } from 'next';
import FadeUp from '../components/FadeUp';
import WorkTabs, { WorkTab } from '../components/WorkTabs';

export const metadata: Metadata = {
  title: 'Work Together | Jessica Wolff Huerta',
  description:
    'Jessica Wolff Huerta partners with hospitality brands, real estate investors, and growth-stage companies to define positioning, design guest experiences, and scale operations.',
  keywords: [
    'Brand Strategist',
    'Hospitality Branding',
    'Real Estate Brand Strategy',
    'Growth Stage Consulting',
    'Jessica Wolff Huerta',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jessica Wolff Huerta - Brand Strategist',
  url: 'https://jesswolff.co',
  telephone: '+34633851467',
  email: 'hello@jesswolff.co',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
  sameAs: ['https://www.linkedin.com/in/jessicawolff/'],
  knowsAbout: [
    'Brand Strategy',
    'Hospitality Branding',
    'Real Estate Positioning',
    'B2B Engagement',
    'Brand Repositioning',
  ],
};

const tabs: WorkTab[] = [
  {
    id: 'hospitality',
    label: 'Hospitality',
    srTitle: 'Brand Strategy for Hospitality',
    description:
      'Independent hotels, villa collections, and hotel portfolios. Whether you are starting from a blank canvas or trying to stabilize further down the road, I help you define your positioning and design the guest experience. From there, we build the practical, everyday tools your team needs to run the property efficiently and scale.',
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'real-estate',
    label: 'Real Estate Investors',
    srTitle: 'Brand Strategy for Real Estate Investors',
    description:
      'Funds and individuals turning local gems into premium asset classes. I help you curate the brand, conceptualize the emotional property narrative, and operationalize the entire experience—ensuring your physical investment translates into long-term commercial value.',
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'growth',
    label: 'Growth Stage Companies',
    srTitle: 'Consulting for Growth Stage Companies',
    description:
      'Midsize businesses that require senior brand and marketing leadership but don\u2019t need the overhead of a full-time executive. I step in to define your market differentiation, audit internal silos, and advise on how to build your internal team and prioritize your roadmap.',
    ctaLabel: 'Start a Conversation',
  },
];

export default function WorkTogetherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-work-hero bg-brown">
        <div className="container grid">
          <WorkTabs tabs={tabs} formAction="https://formsubmit.co/hello@jesswolff.co" />
        </div>
      </section>

      <section className="section-work-ethos">
        <div className="container grid">
          <FadeUp delay={1} className="ethos-text">
            I choose to partner with businesses that want to be additive to their communities. I
            believe a great brand shouldn&apos;t take more than it gives. It creates experiences
            and products with deep respect for the entire chain—from the land and local materials
            to the internal team and the neighborhood it inhabits.
          </FadeUp>
        </div>
      </section>
    </>
  );
}
