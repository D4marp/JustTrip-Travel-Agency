import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Justtrip - Travel
            </h3>
            <p className="mb-4 text-gray-400">
              Mewujudkan impian perjalanan Anda sejak tahun 2000. Jelajahi dunia 
              dengan percaya diri dan ciptakan kenangan yang tak terlupakan.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/justtrip_official?igsh=bGRwbGZrOWxybXpy" className="text-gray-400 hover:text-teal-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@justtrip_official" className="text-gray-400 hover:text-teal-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Destinasi
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Paket Wisata
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Jl. Perjalanan No. 123, Kota, Indonesia, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">021-WISATA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">info@justtrip.com</span>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Berlangganan newsletter kami untuk tips perjalanan dan penawaran eksklusif.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Alamat email Anda"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer">
                Berlangganan
              </Button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PT.TRISULA PANDU INDONESIA. Semua hak dilindungi.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-teal-400 text-sm"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-teal-400 text-sm"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
