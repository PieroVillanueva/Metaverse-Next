import localFont from "next/font/local";
import "../styles/globals.css";

const eudoxusSans = localFont({
  src: [
    {
      path: "../fonts/EudoxusSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/EudoxusSans-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/EudoxusSans-ExtraBold.woff",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-eudoxusSans",
});

export const metadata = {
  title: "Metaversus",
  description: "Página de Metaversus y las nuevas experiencias digitales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${eudoxusSans.variable}`}>{children}</body>
    </html>
  );
}
