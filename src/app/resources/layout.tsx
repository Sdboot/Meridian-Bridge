import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | MERIDIAN BRIDGE',
  description: 'Immigration guides, blogs, and helpful resources',
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
