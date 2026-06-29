import "./globals.css";

export const metadata = {
  title: "Samvidha Papad",
  description:
    "Premium handcrafted papads from Jodhpur, Rajasthan. Every Bite Carries the Taste of Tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
