import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Justtrip - Temukan Destinasi Menakjubkan",
  description:
    "Pesan liburan impian Anda dengan Justtrip. Jelajahi destinasi eksotis, akomodasi mewah, dan pengalaman tak terlupakan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
