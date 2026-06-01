import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | MERIDIAN BRIDGE',
  description: 'Get in touch with our immigration consulting experts',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
