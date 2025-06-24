import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Globe, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]" style={{background: 'linear-gradient(to right, #13315E, #1a4572)'}}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/travel-team-bg.avif"
            alt="Tim ahli travel"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Tentang Wanderlust Travel
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Kami berdedikasi untuk menciptakan pengalaman perjalanan yang tak terlupakan bagi klien kami
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Didirikan pada tahun 2005, Wanderlust Travel dimulai dengan misi sederhana: membantu orang mengalami destinasi paling menakjubkan di dunia dengan mudah, nyaman, dan autentik.
                </p>
                <p>
                  Yang dimulai sebagai tim kecil para traveler yang bersemangat telah berkembang menjadi perusahaan global dengan kantor di 12 negara, melayani ribuan traveler bahagia setiap tahun.
                </p>
                <p>
                  Meskipun berkembang pesat, kami tidak pernah melupakan hal yang paling penting - menciptakan pengalaman perjalanan yang dipersonalisasi untuk mengubah hidup dan menciptakan kenangan abadi.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold" style={{color: '#13315E'}}>15+</p>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold" style={{color: '#13315E'}}>100+</p>
                  <p className="text-gray-600">Destinasi</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold" style={{color: '#13315E'}}>50k+</p>
                  <p className="text-gray-600">Traveler Bahagia</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold" style={{color: '#13315E'}}>12</p>
                  <p className="text-gray-600">Kantor Global</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/justrip.jpeg"
                alt="Tim kami beraksi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu semua yang kami lakukan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#13315E20'}}>
                  <value.icon className="h-6 w-6" style={{color: '#13315E'}} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ahli travel bersemangat yang berdedikasi untuk menciptakan perjalanan sempurna Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mb-2" style={{color: '#13315E'}}>{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{backgroundColor: '#13315E15'}}>
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Siap Memulai Petualangan Anda?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Biarkan kami membantu Anda merencanakan perjalanan seumur hidup. Ahli travel kami siap menciptakan itinerary sempurna untuk Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-base cursor-pointer text-white"
                  style={{backgroundColor: '#13315E', ':hover': {backgroundColor: '#0f2a54'}}}
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-base"
                  style={{borderColor: '#13315E', color: '#13315E'}}
                >
                  Jelajahi Destinasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const values = [
  {
    title: "Keunggulan",
    description:
      "Kami berusaha untuk unggul dalam setiap aspek layanan kami, dari perencanaan hingga eksekusi.",
    icon: Award,
  },
  {
    title: "Fokus Pelanggan",
    description:
      "Kepuasan Anda adalah prioritas utama kami. Kami mendengarkan kebutuhan Anda dan melampaui harapan Anda.",
    icon: Users,
  },
  {
    title: "Keberlanjutan",
    description:
      "Kami berkomitmen pada travel yang bertanggung jawab yang menghormati budaya lokal dan melindungi lingkungan.",
    icon: Globe,
  },
  {
    title: "Inovasi",
    description:
      "Kami terus mencari cara baru untuk meningkatkan pengalaman travel Anda dengan solusi inovatif.",
    icon: Clock,
  },
];

const team = [
  {
    name: "Emily Chen",
    role: "Pendiri & CEO",
    photo: "/user1.jpg",
    bio: "Dengan pengalaman lebih dari 20 tahun di industri travel, Emily mendirikan Wanderlust untuk berbagi passion-nya terhadap eksplorasi.",
  },
  {
    name: "David Rodriguez",
    role: "Kepala Operasional",
    photo: "/user4.avif",
    bio: "David memastikan setiap perjalanan berjalan lancar, dengan perhatian teliti terhadap logistik dan kepuasan pelanggan.",
  },
  {
    name: "Sarah Johnson",
    role: "Ahli Destinasi - Asia",
    photo: "/user3.jpg",
    bio: "Setelah tinggal di 5 negara Asia, Sarah menghadirkan pengetahuan lokal autentik untuk paket travel Asia kami.",
  },
  {
    name: "Michael Okonkwo",
    role: "Ahli Destinasi - Afrika",
    photo: "/user2.jpg",
    bio: "Lahir dan besar di Kenya, Michael mengkhususkan diri dalam menciptakan pengalaman safari Afrika yang autentik.",
  },
];
