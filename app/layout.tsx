import "./globals.css";

export const metadata = {
  title: "Delvora Origins",
  description: "Indonesian Spice Sourcing & Export",
  icons: {
    icon: "/favicon.ico?v=999",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}