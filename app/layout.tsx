import "./globals.css";

export const metadata = {
  title: "Delvora Origins",
  description:
    "Indonesian Spice Sourcing & Export",
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