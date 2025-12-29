import "./globals.css";

export const metadata = {
  title: "ElectroMind AI",
  description: "AI Electronics Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
