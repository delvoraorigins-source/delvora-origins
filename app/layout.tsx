import "./globals.css";

export const metadata = {
  title: "Delvora Origins",
  description: "Indonesian Spice Sourcing & Export",
  icons: {
    icon: "/icon.png",
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