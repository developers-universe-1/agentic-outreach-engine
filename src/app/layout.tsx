import './globals.css';

export const metadata = {
  title: 'Agentic Outreach Engine',
  description: 'AI-native multi-channel outreach — Email, LinkedIn, and Cold Call sequences that book meetings on autopilot.',
  openGraph: {
    title: 'Agentic Outreach Engine',
    description: 'AI-native multi-channel outreach that books meetings on autopilot.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
