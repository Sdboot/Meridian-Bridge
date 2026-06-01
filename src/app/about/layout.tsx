import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MERIDIAN BRIDGE',
  description: 'Learn about MERIDIAN BRIDGE - your trusted immigration consulting partner',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
