import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import CallToAction from '@/components/cta'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { BUY_LINK, DEMO_URL } from '@/constant/constant'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  description: 'Bitpan - WooCommerce FSE block theme',
  title: 'Bitpan WooCommerce Theme',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://bitpan-fse.booliitheme.com/"
              target="_blank"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              <svg className="me-1 h-4 w-4 fill-white" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                ></path>
              </svg>
              WooCommerce FSE theme
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="text-balance text-6xl font-medium tracking-tight text-gray-950 sm:text-8xl">
            WooCommerce <br />
            <i className="font-playfair-display font-normal">
              full site editing
            </i>{' '}
            block theme.
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Modern & creative multipurpose WooCommerce FSE block theme for
            businesses.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href={BUY_LINK} target="_blank">
              Buy theme
            </Button>
            <Button variant="secondary" href={DEMO_URL} target="_blank">
              Live demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Subheading>Skincare, Fashion, Hijab, and more</Subheading>
        <Heading as="h2" className="max-w-3xl">
          A snapshot of the home page.
        </Heading>
        <Screenshot
          width={2662}
          height={2062}
          src="/screenshots/screenshot.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Some outstanding features.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Fse block theme"
          title="True Full Site Editing."
          description="Edit every element—from the Header, Footer, Product Pages, Checkout flow, to widget areas—using the intuitive Block Editor interface. What You See Is What You Get (WYSIWYG) – live and on-site."
          graphic={
            <div className="h-80 bg-[url(/screenshots/editor.png)] bg-cover bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3"
        />
        <BentoCard
          eyebrow="PageSpeed Insights"
          title="Superior Performance."
          description="As a lightweight and streamlined Block Theme, Bitpan is optimized for top-tier speed and load performance, significantly improving your Google PageSpeed scores and SEO rankings."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/googlespeed.png)] bg-cover bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3"
        />

        <BentoCard
          eyebrow="Block Patterns"
          title="Diverse Block Patterns."
          description="Utilize a comprehensive library of professionally designed Block Patterns, allowing you to construct complex page layouts with simple drag-and-drop operations, saving hours of design time."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/patterns.png)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />

        <BentoCard
          eyebrow="High-End Design"
          title="High-Conversion Product Page."
          description="Minimalist design that highlights visuals and essential product information to drive purchasing decisions."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/productpage.png)] bg-cover bg-right bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="High-End Design"
          title="Mega Menu."
          description="Enhance site navigation with a customizable mega menu that organizes products and categories effectively."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/megamenu.png)] bg-contain bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
      </div>
    </Container>
  )
}

function Includeds() {
  const images = [
    {
      src: '/screenshots/homeskincare.png',
      url: 'https://bitpan-fse.booliitheme.com/',
      alt: 'Home Skincare',
      width: 3251,
      height: 1680,
    },
    {
      src: '/screenshots/homehijab.png',
      url: 'https://bitpan-hijab.booliitheme.com/',
      alt: 'Home Hijab',
      width: 3251,
      height: 1680,
    },
    {
      src: '/screenshots/homefashion.png',
      url: 'https://bitpan-fashion.booliitheme.com/',
      alt: 'Home Fashion',
      width: 3251,
      height: 1680,
    },
    {
      src: '/screenshots/blog.png',
      url: 'https://bitpan-fse.booliitheme.com/blog/',
      alt: 'Blog',
      width: 3251,
      height: 1680,
    },
    {
      src: '/screenshots/cartpage.png',
      url: DEMO_URL,
      alt: 'Cart',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/productpage.png',
      url: 'https://bitpan-fse.booliitheme.com/product/exfoliating-mask/',
      alt: 'Product Page',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/section1.png',
      url: 'https://bitpan-fashion.booliitheme.com/',
      alt: 'Section 1',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/section2.png',
      url: 'https://bitpan-fashion.booliitheme.com/',
      alt: 'Section 2',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/section3.png',
      url: 'https://bitpan-hijab.booliitheme.com/',
      alt: 'Section 3',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/section4.png',
      url: 'https://bitpan-hijab.booliitheme.com/product/loose-fit-shirt/',
      alt: 'Section 4',
      width: 1761,
      height: 1680,
    },
    {
      src: '/screenshots/contactus.png',
      url: 'https://bitpan-fse.booliitheme.com/contact-us/',
      alt: 'Contact Us',
      width: 1847,
      height: 1680,
    },
    {
      src: '/screenshots/aboutus.png',
      url: 'https://bitpan-fse.booliitheme.com/about-us/',
      alt: 'About Us',
      width: 1847,
      height: 1680,
    },
  ]

  return (
    <div>
      <div className="mt-40 w-full sm:mt-36 lg:mt-28">
        <div className="mx-auto max-w-160 space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32">
          <section className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900">
              What’s included
            </h2>

            <div className="prose prose-slate max-w-2xl space-y-10 prose-a:font-semibold prose-a:text-sky-500 prose-a:hover:text-sky-600 lg:col-span-2">
              <div className="*:first:mt-0 *:last:mb-0">
                <strong>
                  Welcome to the New Era of WordPress eCommerce Design!
                </strong>
                <p>
                  Bitpan is not just another WooCommerce theme; it’s a leap
                  forward in performance, flexibility, and design quality. Built
                  entirely with Full Site Editing (FSE) and the Block
                  Architecture, Bitpan delivers an unparalleled, visual
                  customization experience and maximum power without the bloat
                  of traditional heavy page builders.
                </p>
              </div>
              <div className="space-y-10">
                <div>
                  <p>
                    <strong>
                      Core Feature: Unleashing the Power of Full Site Editing
                      (FSE)
                    </strong>{' '}
                    — Bitpan is a pure Block Theme designed to harness the full
                    potential of the modern WordPress architecture.
                  </p>
                  <ul>
                    <li>
                      <strong>True Full Site Editing:</strong> Edit every
                      element—from the Header, Footer, Product Pages, Checkout
                      flow, to widget areas—using the intuitive Block Editor
                      interface. What You See Is What You Get (WYSIWYG) – live
                      and on-site.
                    </li>
                    <li>
                      <strong>Superior Performance: </strong> As a lightweight
                      and streamlined Block Theme, Bitpan is optimized for
                      top-tier speed and load performance, significantly
                      improving your Google PageSpeed scores and SEO rankings.
                    </li>
                    <li>
                      <strong>Diverse Block Patterns:</strong> Utilize a
                      comprehensive library of professionally designed Block
                      Patterns, allowing you to construct complex page layouts
                      with simple drag-and-drop operations, saving hours of
                      design time.
                    </li>
                    <li>
                      <strong>Global Styles Control:</strong> Effortlessly
                      change fonts, color palettes, and layouts for the entire
                      website via the FSE Styles interface, ensuring instant
                      design consistency.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>Proven Premium & High-End Design</strong> — The
                    aesthetic foundation of Bitpan is derived from our
                    previously ThemeForest-approved and highly-rated Next.js
                    eCommerce template, ensuring a high-quality, professional
                    look.
                  </p>
                  <ul>
                    <li>
                      <strong>Premium Aesthetic:</strong> Features a modern,
                      clean, and luxurious interface, meticulously refined to
                      put the focus squarely on your products and enhance the
                      customer’s shopping journey.
                    </li>
                    <li>
                      <strong>Multipurpose Mastery:</strong> With its flexible
                      and adaptable design, Bitpan is easy to customize and
                      perfectly suited for various business niches: Fashion &
                      Clothing, Skincare & Cosmetics, Shoes & Accessories,
                      Jewelry & Handmade, Interior & Furniture, Hijab, and more.
                    </li>
                    <li>
                      <strong>Pixel-Perfect Responsiveness:</strong> Guarantees
                      your store looks professional, seamless, and stunning on
                      every device, including Desktop, Tablet, and Mobile.
                    </li>
                    <li>
                      <strong>High-Conversion Product Pages: </strong>{' '}
                      Minimalist design that highlights visuals and essential
                      product information to drive purchasing decisions.
                    </li>
                    <li>
                      <strong>Customizable Cart & Checkout:</strong> Gain full
                      control over the layout and styling of the most critical
                      stages of the sales funnel.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    <strong>Accessibility</strong> — Bitpan is built with
                    accessibility at its core, ensuring an inclusive experience
                    for all users.
                  </p>
                  <ul>
                    <li>
                      Fully accessibility ready WordPress theme, passes WCAG 2.2
                      level AA accessibility requirements
                    </li>
                    <li>User friendly, Disability-friendly, Barrier-free</li>
                    <li>Keyboard and screen reader friendly</li>
                    <li>Optimized for readability</li>
                    <li>
                      Fully localization ready, multilingual, with right-to-left
                      (RTL) languages support
                    </li>
                    <li>Mega menu, dropdown, modal, icon blocks</li>
                    <li>
                      Full WordPress block editor compatibility – no need for
                      page builders!
                    </li>
                    <li>
                      Enhancing user experience with block variations
                      (predefined block variants)
                    </li>
                  </ul>
                </div>

                <p>
                  <strong>SEO-friendly</strong> — the theme is designed with SEO
                  in mind, so your site will rank higher in search engines.
                </p>
                <p>
                  <strong>Why Choose Bitpan?</strong> — Choosing Bitpan means
                  selecting the future of WordPress technology (FSE) combined
                  with premium design quality, providing an eCommerce solution
                  that is both powerful in performance and exquisite in
                  aesthetics.
                </p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3">
            <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
              {images.map(({ src, alt, width, height, url }, index) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className="rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                    sizes="(min-width: 1024px) 35vw, (min-width: 700px) 50vw, 100vw"
                  />
                </a>
              ))}
            </div>
          </section>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 pb-32 pt-20">
          <FeatureSection />
          <BentoSection />
        </div>

        <Gradient className="relative">
          <div className="absolute inset-2 rounded-xl bg-white/80" />
          <Container>
            <CallToAction />
          </Container>
        </Gradient>

        <Container className="relative">
          <Includeds />
          {/* <Faqs /> */}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
