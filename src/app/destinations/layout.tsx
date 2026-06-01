import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | MERIDIAN BRIDGE',
  description: 'Explore immigration destinations worldwide',
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
