import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">

        <section className="py-16 bg-white">
          <div className="px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold  text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Punya pertanyaan atau siap merencanakan petualangan berikutnya? Para ahli perjalanan kami siap membantu Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4" style={{backgroundColor: '#e6eaff'}}>
              <Phone className="h-5 w-5" style={{color: '#13315E'}} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Telepon</h3>
              <p className="text-gray-600">
                0822-6647-8147
              </p>
            </div>
              </div>

              <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4" style={{backgroundColor: '#e6eaff'}}>
              <Mail className="h-5 w-5" style={{color: '#13315E'}} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email</h3>
              <p className="text-gray-600">info@justtrip.com</p>
              <p className="text-gray-600">
                support@justtrip.com
              </p>
            </div>
              </div>

              <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4" style={{backgroundColor: '#e6eaff'}}>
              <MapPin className="h-5 w-5" style={{color: '#13315E'}} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Kantor Pusat</h3>
              <p className="text-gray-600">Parengan, Kec. Maduran</p>
              <p className="text-gray-600">Kabupaten Lamongan, Jawa Timur 62261</p>
            </div>
              </div>

              <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4" style={{backgroundColor: '#e6eaff'}}>
              <Clock className="h-5 w-5" style={{color: '#13315E'}} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Jam Operasional</h3>
              <p className="text-gray-600">
                Rabu - Minggu: 08:00 - 17:00
              </p>
              <p className="text-gray-600">
                Senin - Selasa: Tutup
              </p>
            </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                Nama Depan
              </label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium">
                Nama Belakang
              </label>
              <Input id="last-name" placeholder="Doe" />
            </div>
              </div>

              <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
            />
              </div>

              <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Nomor Telepon
            </label>
            <Input id="phone" placeholder="+62 822-6647-8147" />
              </div>

              <div className="space-y-2">
            <label htmlFor="inquiry-type" className="text-sm font-medium">
              Jenis Pertanyaan
            </label>
            <Select>
              <SelectTrigger id="inquiry-type">
                <SelectValue placeholder="Pilih jenis pertanyaan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Pertanyaan Umum</SelectItem>
                <SelectItem value="booking">Pemesanan Baru</SelectItem>
                <SelectItem value="existing">Pemesanan Yang Ada</SelectItem>
                <SelectItem value="custom">Itinerary Khusus</SelectItem>
                <SelectItem value="feedback">Masukan</SelectItem>
              </SelectContent>
            </Select>
              </div>

              <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Pesan
            </label>
            <Textarea
              id="message"
              placeholder="Ceritakan tentang rencana perjalanan atau pertanyaan Anda..."
              rows={5}
            />
              </div>

              <Button
            type="submit"
            className="w-full text-base cursor-pointer py-6"
            style={{backgroundColor: '#13315E'}}
              >
            <Send className="h-4 w-4 mr-2" />
            Kirim Pesan
              </Button>
            </form>
          </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className=" px-4 md:px-10">
            <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  text-gray-900 mb-4">
            Lokasi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kunjungi kantor kami di Lamongan, Jawa Timur
          </p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
          <div className="h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126548.5665974203!2d112.21220109726562!3d-6.981891700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77ed2411b37ec1%3A0x1fcd584f1850db6d!2sJUSTTRIP%20TOUR%20%26%20TRAVEL!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 max-w-md mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Kantor Lamongan</h3>
            <p className="text-gray-600 mb-2">Parengan, Kec. Maduran, Kabupaten Lamongan, Jawa Timur 62261</p>
            <p className="text-gray-600">0822-6647-8147</p>
          </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4"></h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const offices = [
  {
    city: "New York",
    address: "123 Broadway, New York, NY 10001, USA",
    phone: "+1 (212) 555-1234",
  },
  {
    city: "London",
    address: "45 Oxford Street, London, W1D 2DZ, UK",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Singapore",
    address: "78 Orchard Road, Singapore 238839",
    phone: "+65 6123 4567",
  },
];

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "You can book a trip through our website by selecting your desired destination and following the booking process, or you can contact our travel experts directly by phone or email for personalized assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some locations, we offer payment plans.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "We specialize in creating custom itineraries tailored to your preferences, budget, and schedule. Contact our team to start planning your personalized journey.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the destination and package. Generally, cancellations made 60+ days before departure receive a full refund minus a small administrative fee. Please refer to the specific terms for your booking or contact us for details.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we offer comprehensive travel insurance options to protect your trip investment. We strongly recommend purchasing travel insurance for all international trips.",
  },
];
