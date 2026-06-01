import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | MERIDIAN BRIDGE',
  description: 'Explore our comprehensive immigration consulting services',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
