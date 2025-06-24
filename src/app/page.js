import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]" style={{background: 'linear-gradient(to right, #13315E, #1a4a7a)'}}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bromo.jpg"
            alt="Destinasi pantai tropis"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-12 space-y-6 text-white">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold ">
              Temukan Tempat-Tempat Menakjubkan di Dunia
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Temukan dan pesan liburan sempurna Anda dengan koleksi destinasi 
              menakjubkan pilihan kami
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#featured">
              <Button
                size="lg"
                className="bg-white text-base cursor-pointer text-teal-600 hover:bg-white/90 group"
              >
                Jelajahi Destinasi
                <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destinasi Populer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Jelajahi pilihan lokasi menakjubkan yang kami pilih khusus 
              di seluruh dunia
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-xl text-white">
                          {destination.name}
                        </h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">
                            {destination.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/90 px-2 py-1 rounded text-sm font-medium text-teal-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">
                        {destination.duration}
                      </p>
                      <p className="font-bold text-teal-600">
                        ${destination.price}{" "}
                        <span className="text-sm font-normal text-gray-500">
                          per orang
                        </span>
                      </p>
                    </div>
                    {/* LINK DIPERBAIKI: menggunakan query parameter */}
                    <Link href={`/detail?id=${destination.slug}`}>
                      <Button
                        variant="outline"
                        className="border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-50"
                      >
                        Lihat Detail
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Kami berdedikasi untuk mewujudkan impian perjalanan Anda dengan 
              layanan luar biasa dan pengalaman tak terlupakan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-teal-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Dengarkan dari pelanggan yang puas tentang pengalaman perjalanan 
              luar biasa mereka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        {testimonial.destination}
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
    </div>
  );
}

// Data destinasi
const destinations = [
  {
    slug: "santorini",
    name: "Santorini",
    location: "Greece",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    price: 1299,
  },
  {
    slug: "bali",
    name: "Bali",
    location: "Indonesia",
    image: "/bali.webp",
    rating: 4.8,
    duration: "10 Days / 9 Nights",
    price: 1499,
  },
  {
    slug: "maldives",
    name: "Maldives",
    location: "Indian Ocean",
    image: "/maldives.jpg",
    rating: 4.9,
    duration: "5 Days / 4 Nights",
    price: 1899,
  },
  {
    slug: "paris",
    name: "Paris",
    location: "France",
    image: "/paris.jpg",
    rating: 4.7,
    duration: "6 Days / 5 Nights",
    price: 1199,
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    location: "Japan",
    image: "/tokyo.jpg",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    price: 1699,
  },
  {
    slug: "machu-picchu",
    name: "Machu Picchu",
    location: "Peru",
    image: "/machu-picchu.jpg",
    rating: 4.9,
    duration: "9 Days / 8 Nights",
    price: 1599,
  },
];

const features = [
  {
    title: "Handpicked Destinations",
    description:
      "Our travel experts personally select and vet each destination to ensure exceptional quality and experiences.",
    icon: Star,
  },
  {
    title: "Best Price Guarantee",
    description:
      "We promise the best rates and will match any lower price you find for the same trip elsewhere.",
    icon: function Icon({ className }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    },
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
    icon: function Icon({ className = "" }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    },
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    destination: "Santorini, Greece",
    avatar: "/user1.jpg",
    rating: 5,
    comment:
      "Our trip to Santorini was absolutely magical! The accommodations were perfect, and the itinerary allowed us to experience everything we wanted. Will definitely book with them again!",
  },
  {
    name: "Michael Chen",
    destination: "Tokyo, Japan",
    avatar: "/user2.jpg",
    rating: 5,
    comment:
      "The attention to detail was impressive. Our guide was knowledgeable and friendly, making our Tokyo experience unforgettable. Highly recommend their services!",
  },
  {
    name: "Emma Rodriguez",
    destination: "Bali, Indonesia",
    avatar: "/user3.jpg",
    rating: 4,
    comment:
      "Beautiful accommodations and excellent service throughout our stay in Bali. The only reason for 4 stars is that one excursion was canceled, but they quickly arranged an alternative.",
  },
];