import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Calendar, Users, Clock, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bromo.jpg"
            alt="Paket perjalanan"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className=" relative h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Paket Perjalanan
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Pengalaman perjalanan yang telah dikurasi ahli untuk setiap jenis petualang
          </p>
        </div>
      </section>

    
      {/* Featured Packages */}
      <section className="py-12 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Paket Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Pengalaman perjalanan paling populer kami, dipilih khusus untuk nilai luar biasa dan kenangan tak terlupakan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  {pkg.discount && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {pkg.discount}% DISKON
                    </div>
                  )}
                  {pkg.tag && (
                    <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {pkg.tag}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{pkg.name}</h3>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm font-medium text-teal-700">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      {pkg.rating}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.groupSize}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.season}
                    </div>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-end">
                    <div>
                      {pkg.originalPrice && (
                        <p className="text-gray-500 text-sm line-through">
                          ${pkg.originalPrice}
                        </p>
                      )}
                      <p className="font-bold text-teal-600 text-xl">
                        ${pkg.price}{" "}
                        <span className="text-sm font-normal text-gray-500">
                          per orang
                        </span>
                      </p>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Jelajahi berdasarkan Gaya Perjalanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Temukan paket yang sempurna sesuai preferensi perjalanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelStyles.map((style, index) => (
              <Link href={`/packages?style=${style.id}`} key={index}>
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {style.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {style.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Semua Paket Perjalanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Jelajahi koleksi lengkap pengalaman perjalanan yang dibuat oleh ahli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow p-0"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  {pkg.tag && (
                    <Badge className="absolute top-2 left-2 bg-teal-600 hover:bg-teal-700">
                      {pkg.tag}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{pkg.name}</h3>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span>{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {pkg.groupSize}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="font-bold text-teal-600">
                      ${pkg.price}{" "}
                      <span className="text-xs font-normal text-gray-500">
                        per orang
                      </span>
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-50"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-teal-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Pelancong Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Pengalaman nyata dari pelancong yang memesan paket kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.package}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Memesan Liburan Impian Anda?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Para ahli perjalanan kami siap membantu Anda merencanakan perjalanan yang sempurna
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-white/90 text-base cursor-pointer"
              >
                Jelajahi Semua Paket
              </Button>
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-white/90 text-base cursor-pointer"
              >
                Hubungi Ahli Perjalanan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const featuredPackages = [
  {
    name: "Penjelajah Pulau Yunani",
    location: "Yunani",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "10 Hari",
    groupSize: "Maks 12 Orang",
    season: "Apr-Okt",
    price: 2499,
    originalPrice: 2999,
    discount: 15,
    tag: "Terlaris",
    highlights: [
      "Kunjungi Athena, Mykonos, dan Santorini",
      "Pelayaran sunset pribadi di Santorini",
      "Tur terpandu reruntuhan kuno",
      "Island hopping dengan feri",
    ],
  },
  {
    name: "Perjalanan Budaya Jepang",
    location: "Jepang",
    image: "/japan-cultural.jpg",
    rating: 4.8,
    duration: "12 Hari",
    groupSize: "Maks 10 Orang",
    season: "Sepanjang Tahun",
    price: 3299,
    tag: "Budaya",
    highlights: [
      "Eksplorasi Tokyo, Kyoto, dan Osaka",
      "Pengalaman upacara teh tradisional",
      "Trip satu hari ke Gunung Fuji",
      "Menginap di ryokan tradisional",
    ],
  },
  {
    name: "Petualangan Kosta Rika",
    location: "Kosta Rika",
    image: "/costa-rica-adventure.jpg",
    rating: 4.9,
    duration: "8 Hari",
    groupSize: "Maks 14 Orang",
    season: "Des-Apr",
    price: 1899,
    originalPrice: 2199,
    discount: 10,
    tag: "Petualangan",
    highlights: [
      "Taman Nasional Gunung Berapi Arenal",
      "Zip-lining melalui hutan awan",
      "Pengamatan satwa liar di Manuel Antonio",
      "Pengalaman arung jeram",
    ],
  },
];

const travelStyles = [
  {
    id: "adventure",
    name: "Petualangan",
    description: "Untuk pencari sensasi dan pelancong aktif",
    image: "/adventure.jpg",
  },
  {
    id: "beach",
    name: "Pantai & Relaksasi",
    description: "Bersantai di pantai terindah dunia",
    image: "/beach.jpg",
  },
  {
    id: "cultural",
    name: "Pencelupan Budaya",
    description: "Menyelami tradisi dan sejarah lokal",
    image: "/cultural.jpg",
  },
  {
    id: "luxury",
    name: "Liburan Mewah",
    description: "Pengalaman premium dengan layanan luar biasa",
    image: "/luxury.jpg",
  },
  {
    id: "family",
    name: "Ramah Keluarga",
    description: "Menyenangkan dan edukatif untuk segala usia",
    image: "/family.jpg",
  },
  {
    id: "honeymoon",
    name: "Bulan Madu",
    description: "Liburan romantis untuk pasangan baru",
    image: "/honeymoon.jpg",
  },
  {
    id: "wildlife",
    name: "Satwa Liar & Alam",
    description: "Jelajahi keajaiban alam dan ekosistem",
    image: "/wildlife.jpg",
  },
  {
    id: "food",
    name: "Makanan & Anggur",
    description: "Perjalanan kuliner untuk pecinta makanan",
    image: "/food-wine.jpg",
  },
];

const allPackages = [
  {
    name: "Sorotan Italia",
    location: "Italia",
    image: "/italian.webp",
    rating: 4.7,
    duration: "9 Hari",
    groupSize: "Maks 16",
    price: 2199,
    tag: "Populer",
  },
  {
    name: "Penjelajah Thailand",
    location: "Thailand",
    image: "/thailand.jpg",
    rating: 4.8,
    duration: "11 Hari",
    groupSize: "Maks 12",
    price: 1799,
  },
  {
    name: "Trek Andes Peru",
    location: "Peru",
    image: "/peruvian-andes.jpg",
    rating: 4.9,
    duration: "10 Hari",
    groupSize: "Maks 10",
    price: 2399,
    tag: "Petualangan",
  },
  {
    name: "Keajaiban Maroko",
    location: "Maroko",
    image: "/moroccan.png",
    rating: 4.7,
    duration: "8 Hari",
    groupSize: "Maks 14",
    price: 1599,
  },
  {
    name: "Pedalaman Australia",
    location: "Australia",
    image: "/australian.png",
    rating: 4.8,
    duration: "12 Hari",
    groupSize: "Maks 12",
    price: 3299,
    tag: "Alam",
  },
  {
    name: "Safari Afrika Selatan",
    location: "Afrika Selatan",
    image: "/african-safari.jpg",
    rating: 4.9,
    duration: "10 Hari",
    groupSize: "Maks 8",
    price: 3599,
    tag: "Satwa Liar",
  },
  {
    name: "Vietnam & Kamboja",
    location: "Asia Tenggara",
    image: "/vietnam-and-cambodia.jpg",
    rating: 4.8,
    duration: "14 Hari",
    groupSize: "Maks 12",
    price: 2299,
  },
  {
    name: "Petualangan Islandia",
    location: "Islandia",
    image: "/iceland-adventure.webp",
    rating: 4.8,
    duration: "7 Hari",
    groupSize: "Maks 10",
    price: 2799,
    tag: "Alam",
  },
  {
    name: "Keajaiban Mesir",
    location: "Mesir",
    image: "/egytian.webp",
    rating: 4.7,
    duration: "9 Hari",
    groupSize: "Maks 16",
    price: 1999,
    tag: "Bersejarah",
  },
];

const testimonials = [
  {
    name: "James Wilson",
    package: "Penjelajah Pulau Yunani",
    avatar: "/user2.jpg",
    rating: 5,
    comment:
      "Paket Pulau Yunani melebihi semua harapan kami. Pelayaran sunset pribadi di Santorini benar-benar ajaib dan sesuatu yang akan kami kenang selamanya.",
  },
  {
    name: "Aiko Tanaka",
    package: "Perjalanan Budaya Jepang",
    avatar: "/user1.jpg",
    rating: 5,
    comment:
      "Sebagai seseorang berketurunan Jepang, saya terkesan dengan keaslian pengalaman budayanya. Menginap di ryokan adalah highlight dan pemandu kami luar biasa.",
  },
  {
    name: "Carlos Mendez",
    package: "Petualangan Kosta Rika",
    avatar: "/user3.jpg",
    rating: 4,
    comment:
      "Paket petualangan yang luar biasa dengan campuran aktivitas dan relaksasi yang sempurna. Zip-lining melalui hutan awan sangat menakjubkan! Hanya memberi 4 bintang karena salah satu hotel tidak sebaik yang diharapkan.",
  },
];
