import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Leaf, Shield, TrendingUp, Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/udalice-icon.jpg"
              alt="Udalice Logo"
              width={140}
              height={50}
              // className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="#specifications"
              className="text-sm font-medium hover:text-primary"
            >
              Specifications
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Leading Exporter of Palm Kernel Products from Nigeria
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your trusted partner for high-quality palm kernel shells,
                    palm kernel cake, and whole palm kernels sourced directly
                    from sustainable operations across Nigeria.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#products">View Products</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/udalice-img3.jpg"
                  alt="Palm Kernel Plantation"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-4 text-gray-500">
                Premium quality palm kernel products for various industrial
                applications
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Palm Kernel Shells (PKS)</CardTitle>
                  <CardDescription>
                    Premium renewable energy source
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/udalice-img.jpg"
                    alt="Palm Kernel Shells"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>High-energy biomass content</li>
                    <li>Consistent quality</li>
                    <li>Low ash content</li>
                    <li>Ideal for power generation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Palm Kernel Cake (PKC)</CardTitle>
                  <CardDescription>
                    Protein-rich feed ingredient
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/PKC.jpg"
                    alt="Palm Kernel Cake"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>16-18% protein content</li>
                    <li>High in fiber</li>
                    <li>Essential nutrients</li>
                    <li>Perfect for agriculture</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Whole Palm Kernels</CardTitle>
                  <CardDescription>Premium quality kernels</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/udalice-img2.jpg"
                    alt="Whole Palm Kernels"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>High oil content</li>
                    <li>Consistent sizing</li>
                    <li>Premium quality</li>
                    <li>Versatile applications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-green-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Choose Udalice Integrated
                </h2>
                <p className="text-gray-500">
                  We combine expertise, quality, and reliability to deliver the
                  best palm kernel products to our global clients.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Quality Assurance</h3>
                    <p className="text-sm text-gray-500">
                      Rigorous quality control meeting international standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Sustainability</h3>
                    <p className="text-sm text-gray-500">
                      Commitment to responsible sourcing practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Competitive Pricing</h3>
                    <p className="text-sm text-gray-500">
                      Favorable pricing through established logistics
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Reliable Delivery</h3>
                    <p className="text-sm text-gray-500">
                      5000 metric tons monthly capacity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Product Specifications
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Key Specifications</TableHead>
                  <TableHead>Applications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Palm Kernel Shells (PKS)
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside">
                      <li>Moisture: 13-18% (max)</li>
                      <li>Fiber: 2-3% (max)</li>
                      <li>Calorific Value: 3500-4000 Kcal</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    Biomass power generation, Industrial boilers
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Palm Kernel Cake (PKC)
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside">
                      <li>Protein: 16-18%</li>
                      <li>Fiber: 15-18%</li>
                      <li>Moisture: 8-10%</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    Animal feed, Aquaculture, Organic fertilizer
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Whole Palm Kernels
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside">
                      <li>Oil content: 45-50%</li>
                      <li>Moisture: 6-8%</li>
                      <li>FFA: {"<"}5%</li>
                    </ul>
                  </TableCell>
                  <TableCell>Oil extraction, Food processing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-green-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Start Your Partnership Today
                </h2>
                <p className="text-gray-500">
                  Contact us to discuss how Udalice Integrated can supply your
                  business with premium palm kernel products from Nigeria.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-green-600" />
                    <a href="mailto:info@udalice.com.ng" className="text-sm">
                      info@udalice.com.ng
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-green-600" />
                    <a href="tel:+2347068560657" className="text-sm">
                      +234 706 856 0657
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://wa.me/message/5YYCNNTRWIQ4B1"
                      className="text-sm"
                    >
                      <FaWhatsapp className="h-5 w-5 text-green-600" />
                    </a>
                    <a
                      href="https://wa.me/message/5YYCNNTRWIQ4B1"
                      className="text-sm"
                    >
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Request Information</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-gray-300 p-2"
                        rows={4}
                        placeholder="Tell us about your requirements"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Image
              src="/udalice-icon.jpg"
              alt="Udalice Logo"
              width={140}
              height={50}
              // className="h-10 w-auto"
            />
            <p className="text-sm text-gray-500">
              Registration No: 1371372
              <br />
              NEPC Registration No: 0037340
              <br />
              Federal Republic of Nigeria
            </p>
          </div>
          <div className="flex gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-500 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="text-gray-500 hover:text-primary"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-500 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Udalice Integrated Nig Limited. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
