"use client";

import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Data destinasi detail
const destinations = [
  // Tambahkan di data destinations pada file detail/page.js:

{
  slug: "barcelona",
  name: "Barcelona",
  location: "Spain",
  image: "/barcelona.jpg",
  rating: 4.7,
  duration: "5 Days / 4 Nights",
  price: 999,
  description:
    "Barcelona menawarkan perpaduan sempurna antara arsitektur Gaudí yang memukau, pantai Mediterania yang indah, dan kehidupan malam yang vibrant. Kota ini terkenal dengan Sagrada Familia, Park Güell, dan budaya Catalan yang kaya.",
  highlights: [
    "Kunjungi Sagrada Familia & Park Güell",
    "Jalan-jalan di Las Ramblas",
    "Pantai Barceloneta",
    "Wisata kuliner tapas",
    "Gothic Quarter exploration",
  ],
  includes: [
    "Akomodasi hotel pusat kota",
    "Sarapan harian",
    "Tiket masuk objek wisata",
    "City walking tour",
    "Transportasi lokal",
  ],
  reviews: [
    {
      name: "Maria Garcia",
      avatar: "/user7.jpg",
      rating: 5,
      comment: "Barcelona luar biasa! Arsitektur Gaudí memukau dan makanannya enak.",
    },
  ],
},
{
  slug: "cape-town",
  name: "Cape Town",
  location: "South Africa",
  image: "/cape-town.jpg",
  rating: 4.8,
  duration: "8 Days / 7 Nights",
  price: 1399,
  description:
    "Cape Town adalah permata Afrika Selatan dengan Table Mountain yang ikonik, Cape Point yang spektakuler, dan sejarah yang kaya. Nikmati pemandangan yang memukau dan wildlife yang luar biasa.",
  highlights: [
    "Table Mountain cable car",
    "Cape Point & Cape of Good Hope",
    "Wine tasting di Stellenbosch",
    "Penguin colony di Boulders Beach",
    "Robben Island historical tour",
  ],
  includes: [
    "Akomodasi hotel berbintang",
    "Sarapan & beberapa makan malam",
    "Safari day trip",
    "Wine tour",
    "Semua transportasi",
  ],
  reviews: [
    {
      name: "David Smith",
      avatar: "/user8.jpg",
      rating: 5,
      comment: "Pemandangan Table Mountain luar biasa! Safari dan wine tour yang tak terlupakan.",
    },
  ],
},
  {
    slug: "santorini",
    name: "Santorini",
    location: "Greece",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    price: 1299,
    description:
      "Santorini, pulau indah di Yunani dengan pemandangan matahari terbenam yang menakjubkan, rumah-rumah putih biru yang ikonik, dan pantai-pantai vulkanik yang eksotis. Cocok untuk honeymoon, perjalanan keluarga, atau solo traveler.",
    highlights: [
      "Sunset di Oia yang memukau",
      "Eksplorasi kota Fira & Pyrgos",
      "Wisata pantai: Red Beach, Perissa",
      "Tur wine lokal",
      "Santapan laut segar khas Yunani",
    ],
    includes: [
      "Akomodasi hotel bintang 4",
      "Sarapan harian",
      "Tur keliling pulau",
      "Tiket masuk destinasi wisata",
      "Transportasi lokal",
      "Pemandu wisata berbahasa Inggris",
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        avatar: "/user1.jpg",
        rating: 5,
        comment:
          "Santorini benar-benar magis! Itinerary sangat teratur & akomodasi nyaman.",
      },
    ],
  },
  {
    slug: "bali",
    name: "Bali",
    location: "Indonesia",
    image: "/bali.webp",
    rating: 4.8,
    duration: "10 Days / 9 Nights",
    price: 1499,
    description:
      "Pulau Dewata Bali menawarkan keindahan pantai tropis, budaya yang kaya, dan keramahan lokal. Temukan surga dunia dengan pemandangan sawah, pura magis, dan kuliner lezat.",
    highlights: [
      "Wisata Ubud & sawah Tegalalang",
      "Menikmati sunset di Tanah Lot",
      "Pantai Kuta & Seminyak",
      "Belajar tari tradisional Bali",
      "Wisata kuliner Nusantara",
    ],
    includes: [
      "Akomodasi hotel/villa bintang 4",
      "Sarapan harian",
      "Tur budaya & alam",
      "Tiket objek wisata utama",
      "Transportasi & guide lokal",
    ],
    reviews: [
      {
        name: "Emma Rodriguez",
        avatar: "/user3.jpg",
        rating: 4,
        comment:
          "Akomodasi indah & pelayanan prima, hanya satu trip batal tapi langsung diganti.",
      },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    location: "Indian Ocean",
    image: "/maldives.jpg",
    rating: 4.9,
    duration: "5 Days / 4 Nights",
    price: 1899,
    description:
      "Maldives terkenal dengan laut biru toska, villa di atas air, dan keindahan bawah lautnya. Surga untuk pasangan, honeymoon, atau pencinta diving.",
    highlights: [
      "Menginap di villa atas laut",
      "Snorkeling & diving di coral reef",
      "Private dinner di tepi pantai",
      "Tur island hopping",
      "Spa & wellness premium",
    ],
    includes: [
      "Akomodasi resort mewah",
      "All meals (fullboard)",
      "Airport transfer speedboat",
      "Aktivitas snorkeling & island tour",
      "Spa session untuk 2 orang",
    ],
    reviews: [
      {
        name: "John Lee",
        avatar: "/user4.jpg",
        rating: 5,
        comment: "Pengalaman tak terlupakan, lautnya luar biasa jernih!",
      },
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    location: "France",
    image: "/paris.jpg",
    rating: 4.7,
    duration: "6 Days / 5 Nights",
    price: 1199,
    description:
      "Paris, kota romantis dengan ikon Menara Eiffel, museum kelas dunia, dan kuliner haute cuisine. Nikmati pesona budaya dan sejarah Eropa klasik.",
    highlights: [
      "City tour Eiffel, Louvre, Montmartre",
      "Wisata kuliner & wine",
      "Belanja di Champs-Élysées",
      "Cruise di Sungai Seine",
      "Museum seni & sejarah",
    ],
    includes: [
      "Hotel pusat kota bintang 4",
      "Sarapan & 1x dinner",
      "Tiket masuk museum",
      "Transportasi metro harian",
      "Pemandu lokal",
    ],
    reviews: [
      {
        name: "Alicia Martin",
        avatar: "/user5.jpg",
        rating: 5,
        comment: "Paris menawan, tripnya efektif dan guide ramah sekali.",
      },
    ],
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    location: "Japan",
    image: "/tokyo.jpg",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    price: 1699,
    description:
      "Tokyo: perpaduan tradisi dan modernitas. Kuil kuno, pop culture, kuliner ramen, dan shopping di Shibuya. Kota yang tidak pernah tidur.",
    highlights: [
      "Wisata Asakusa & Tokyo Skytree",
      "Belanja di Shibuya & Harajuku",
      "Cicip street food Tsukiji Market",
      "Fujisan day trip",
      "Onsen & cultural experience",
    ],
    includes: [
      "Hotel bintang 4 di pusat Tokyo",
      "Sarapan harian",
      "JR Pass city transportation",
      "Tiket objek wisata utama",
      "Pemandu multibahasa",
    ],
    reviews: [
      {
        name: "Michael Chen",
        avatar: "/user2.jpg",
        rating: 5,
        comment:
          "Guide sangat profesional, itinerary Tokyo padat & sangat berkesan.",
      },
    ],
  },
  {
    slug: "machu-picchu",
    name: "Machu Picchu",
    location: "Peru",
    image: "/machu-picchu.jpg",
    rating: 4.9,
    duration: "9 Days / 8 Nights",
    price: 1599,
    description:
      "Petualangan ke Machu Picchu, kota kuno Inca di pegunungan Andes. Trekking, panorama spektakuler, dan sejarah yang memukau.",
    highlights: [
      "Inca Trail trekking",
      "Tur Machu Picchu & Sacred Valley",
      "Kunjungan Cusco",
      "Wisata budaya suku lokal",
      "Panorama Pegunungan Andes",
    ],
    includes: [
      "Akomodasi hotel & camping",
      "Makan sesuai itinerary",
      "Tiket masuk Machu Picchu",
      "Transportasi lokal",
      "Guide trekking profesional",
    ],
    reviews: [
      {
        name: "Carlos Gutierrez",
        avatar: "/user6.jpg",
        rating: 5,
        comment: "Trek berat tapi terbayar pemandangan dan sejarahnya!",
      },
    ],
  },
];

function Stars({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.round(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function DetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  console.log("Query parameter 'id':", id);
  
  const dest = destinations.find((d) => d.slug === id);
  console.log("Found destination:", dest);

  if (!dest) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Destinasi Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-6">ID: {id || 'tidak ada'}</p>
        <Link href="/">
          <Button variant="outline" className="border-teal-600 text-teal-600">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Cover */}
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold">{dest.name}</h1>
          <div className="flex items-center mt-2">
            <MapPin className="h-5 w-5 mr-1" />
            <span className="text-lg">{dest.location}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Left: Detail */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-2">
            <Stars rating={dest.rating} />
            <span className="text-gray-600 text-sm">{dest.rating} / 5</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{dest.duration}</span>
          </div>
          <p className="text-2xl font-bold text-teal-700 mb-6">
            ${dest.price} <span className="text-base font-normal text-gray-500">per orang</span>
          </p>
          <p className="text-gray-800 text-lg mb-6">{dest.description}</p>
          <h2 className="text-xl font-bold mb-2 text-teal-900">Highlight Perjalanan</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            {dest.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mb-2 text-teal-900">Termasuk Paket</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            {dest.includes.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        {/* Right: Booking Card */}
        <div className="bg-teal-50 rounded-xl p-6 shadow flex flex-col space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="font-semibold">{dest.location}</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>{dest.rating} / 5</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-2xl text-teal-700">${dest.price}</span>
              <span className="text-gray-500 font-normal text-sm"> / orang</span>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-500">{dest.duration}</span>
            </div>
          </div>
          <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
            Pesan Sekarang
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full border-teal-600 text-teal-600">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4 text-teal-900">Testimoni Pengunjung</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dest.reviews && dest.reviews.length > 0 ? (
            dest.reviews.map((review, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-4 flex gap-4 items-start shadow">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="font-semibold mr-2">{review.name}</span>
                    <Stars rating={review.rating} />
                  </div>
                  <p className="italic text-gray-700">"{review.comment}"</p>
                </div>
              </div>
            ))
          ) : (
            <p>Belum ada testimoni untuk destinasi ini.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
}