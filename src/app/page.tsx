import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  description:
    'Ncmaz Fse - Blog, News and Magazine Full Site Editing WordPress Block theme',
  title: 'Ncmaz Fse Theme',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://ncmaz-fse.booliitheme.com/fe-submission"
              target="_blank"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              <svg className="me-1 h-4 w-4 fill-white" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                ></path>
              </svg>
              New &quot;Frontend Submission Editor&quot; block
              <ArrowRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Ncmaz Fse Theme.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Ncmaz Fse - Blog, News and Magazine Full Site Editing WordPress
            Block theme.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
              target="_blank"
            >
              Buy theme
            </Button>
            <Button
              variant="secondary"
              href="https://ncmaz-fse.booliitheme.com/"
              target="_blank"
            >
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
        <Heading as="h2" className="max-w-3xl">
          A snapshot of the home page.
        </Heading>
        <Screenshot
          width={2662}
          height={2062}
          src="/screenshots/screenshot.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
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
          eyebrow="Video/Audio Player"
          title="Video/audio/podcast live player."
          description="Video/audio/podcast live player. Video player supports landscape and portrait ratios."
          graphic={
            <div className="h-80 bg-[url(/screenshots/music.png)] bg-[size:1100px_680px] bg-[left_-10px_top_-88px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Wishlist/Bookmarks"
          title="The collection of your favorite/saved articles."
          description="The collection of your favorite/saved articles. Rediscover creative ideas, touching stories, and valuable lessons whenever you want."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/wishlist.png)] bg-[size:1100px_650px] bg-[left_-10px_top_-85px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="FE Submission Editor"
          title="Frontend submission editor."
          description="Check out our new ‘Frontend Submission Editor’ block. With its clean and premium design, it’s ready for you to try out."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/fe-submission.png)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Customized"
          title="Full site editing functionality."
          description="Ncmaz Fse is customizable barrier-free universal WordPress block theme with full site editing functionality."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/editor.png)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />

        <BentoCard
          eyebrow="Templates, Patterns"
          title="Multiple Pre-built templates."
          description="Multiple page and post templates to choose from with ability to create your own custom ones."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/pages.png)] bg-cover bg-no-repeat" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function Includeds() {
  return (
    <div>
      <div className="mt-40 w-full sm:mt-36 lg:mt-28">
        <div className="mx-auto max-w-[40rem] space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32">
          <section className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900">
              What’s included
            </h2>

            <div className="prose prose-slate max-w-2xl space-y-10 prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 lg:col-span-2">
              <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                <p>
                  Ncmaz is a Blog, News and Magazine Full Site Editing WordPress
                  Block theme. It is a modern, clean, and creative theme
                  suitable for news, magazine, blog, or other websites. It has a
                  responsive design that displays beautifully across all
                  devices.
                </p>
                <p>
                  Ncmaz Fse is customizable barrier-free universal WordPress
                  block theme with{' '}
                  <strong>full site editing functionality</strong>.
                  Accessibility ready and versatile to fit any purpose. The
                  theme comes with beautifully designed pages, patterns,
                  multiple header and footer layouts, harmonious responsive
                  typography, and color options you can mix and match to fit
                  your brand needs in no time.
                </p>
              </div>
              <div className="space-y-10">
                <div>
                  <strong>Key Features</strong> —
                  <ol>
                    <li>
                      Administrators and developers value its customizability
                      and clean code.
                    </li>
                    <li>
                      Powerful functionality, great user interaction with
                      WordPress Interactive API.
                    </li>
                    <li>
                      <strong>
                        Clean and premium design &quot;Frontend submission
                        editor&quot;.
                      </strong>
                    </li>
                    <li>Bookmark - post, custom post type, page...</li>
                    <li>
                      Wishlist - post, custom post type, page, comment,...
                    </li>
                    <li>
                      <strong>
                        Video/audio/podcast &quot;live player&quot;.
                      </strong>
                    </li>
                    <li>
                      Video player supports landscape and portrait ratios.
                    </li>
                    <li>Dark mode & ready for RTL version.</li>
                    <li>
                      Search page, archive page,... have great search and
                      filter.
                    </li>
                    <li>Woocommerce Support.</li>
                    <li>
                      Provides accessible, user friendly experience for website
                      visitors.
                    </li>
                    <li>
                      Content editors love how easy, yet flexible it is to work
                      with.
                    </li>
                  </ol>
                </div>
                <div>
                  <strong>Full site editing (FSE) </strong> —
                  <ul>
                    <li>
                      Edit every theme part using block-based site editor.
                    </li>
                    <li>No coding skills required.</li>
                    <li>
                      90+ pre-built block patterns, template parts, templates.
                    </li>
                    <li>
                      Multiple page and post templates to choose from with
                      ability to create your own custom ones.
                    </li>
                    <li>
                      Multiple header, footer layouts to choose from with
                      ability to create your own custom ones.
                    </li>
                    <li>3 default global styles variants to choose from.</li>
                  </ul>
                </div>

                <div>
                  <strong>Accessibility</strong> —
                  <ul>
                    <li>
                      Fully accessibility ready WordPress theme, passes WCAG 2.2
                      level AA accessibility requirements
                    </li>
                    <li>Disability-friendly, barrier-free</li>
                    <li>Keyboard and screen reader friendly</li>
                    <li>With proper headings structure and color contrast</li>
                    <li>Optimized for readability</li>
                    <li>Responds adaptively to any screen size</li>
                    <li>
                      Fully localization ready, multilingual, with right-to-left
                      (RTL) languages support
                    </li>
                    <li>User friendly</li>
                    <li>Mega menu, dropdown, modal, icon blocks</li>
                    <li>Mobile friendly responsive design</li>
                    <li>
                      Full WordPress block editor compatibility – no need for
                      page builders!
                    </li>
                    <li>
                      Enhancing user experience with block variations
                      (predefined block variants)
                    </li>
                    <li>Archive page, search page, author page filter</li>
                  </ul>
                </div>
                <div>
                  <strong>Customization</strong> —
                  <ul>
                    <li>Full theme sections customization via site editor</li>
                    <li>
                      Use any Google Fonts font or set up your custom fonts
                    </li>
                    <li>
                      Design consistency assured with global font and color
                      names
                    </li>
                    <li>Customizable content widths</li>
                    <li>
                      Easy to use with full control over theme parts (layouts)
                    </li>
                    <li>
                      Built the right way with WordPress coding standards &amp;
                      requirements
                    </li>
                    <li>Search engine optimized (SEO), speed optimized</li>
                    <li>
                      Secure, clean, semantic, flexible, extensible
                      developer-friendly code
                    </li>
                    <li>100% GPL licensed</li>
                  </ul>
                </div>
                <p>
                  <strong>Modern & Responsive design</strong> — the template has
                  a modern design that will make your site stand out from the
                  competition. The template is designed to look great on all
                  devices, from mobile to desktop.
                </p>
                <p>
                  <strong>SEO-friendly</strong> — the template is designed with
                  SEO in mind, so your site will rank higher in search engines.
                </p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3">
            <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
              <a
                href="https://ncmaz-fse.booliitheme.com/demo-article-single-with-sidebar-template/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/sidebar.png"
                  width={3328}
                  height={1910}
                  alt="Picture of the single article with sidebar"
                  className="aspect-[3328/1910] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>
              <a
                href="https://ncmaz-fse.booliitheme.com/?s=text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/search.png"
                  width={3328}
                  height={1910}
                  alt="Picture of the search page"
                  className="aspect-[3328/1910] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>
              <a
                href="https://ncmaz-fse.booliitheme.com/author/boolii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/author.png"
                  width={3328}
                  height={1910}
                  alt="Picture of the author"
                  className="aspect-[3328/1910] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>
              <a
                href="https://ncmaz-fse.booliitheme.com/demo-article-single-2-with-sidebar-template/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/single2.png"
                  width={3328}
                  height={1910}
                  alt="Picture of the single article 2 with sidebar"
                  className="aspect-[3328/1910] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, (min-width: 700px) 50vw, 100vw"
                />
              </a>
              <a
                href="https://ncmaz-fse.booliitheme.com/hello-world/#comments"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/comments.png"
                  width={3310}
                  height={1914}
                  alt="Picture of the comments"
                  className="aspect-[3310/1950] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>

              <a
                href="https://ncmaz-fse.booliitheme.com/home-page-4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/music.png"
                  width={3128}
                  height={1910}
                  alt="Picture of the Music section"
                  className="aspect-[3328/2050] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>

              <a
                href="https://ncmaz-fse.booliitheme.com/fe-submission"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/fe-submission.png"
                  width={2175}
                  height={2304}
                  alt="Picture of the FE submission"
                  className="aspect-[2175/2304] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
                  sizes="(min-width: 1024px) 35vw, ((min-width: 700px) and (max-width: 1024px)) 50vw, 100vw"
                />
              </a>
            </div>
          </section>
          <div></div>
        </div>
      </div>
    </div>
  )
}

function Faqs() {
  return (
    <section id="faqs" className="my-28 w-full">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
        <div className="lg:col-span-4">
          <h2 className="text-base font-semibold leading-7 text-indigo-500">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-4xl font-medium tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
            Everything you need to know
          </p>
        </div>
        <div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
          <section>
            <h3 className="text-lg font-semibold">
              The Full Site Editor (FSE) in WordPress offers many significant
              benefits <br /> for website creators and editors 👇
            </h3>
            <dl className="prose prose-slate mt-8 max-w-2xl divide-y divide-slate-100 prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
              <div>
                <p>
                  <strong>Enhanced User Experience:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Intuitive Interface:</strong> FSE provides a more
                    user-friendly and visually appealing interface, making it
                    easier for users to create and manage websites.
                  </li>
                  <li>
                    <strong>Real-time Editing:</strong> Changes made in the
                    editor are instantly reflected on the front end, allowing
                    for immediate feedback and a streamlined workflow.
                  </li>
                  <li>
                    <strong>Global Styles:</strong> FSE introduces global styles
                    that can be applied consistently across the entire website,
                    ensuring a cohesive and branded look.
                  </li>
                </ul>
                <p>
                  <strong>Improved Design Flexibility:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Block-Based Editing:</strong> The block-based system
                    allows for greater flexibility in designing layouts and
                    content, with various blocks available for different types
                    of content (text, images, galleries, etc.).
                  </li>
                  <li>
                    <strong>Customizability:</strong> Blocks can be customized
                    with various settings and styles, giving users more control
                    over the appearance of their website.
                  </li>
                  <li>
                    <strong>Theme Independence:</strong> FSE reduces reliance on
                    themes, allowing for more customization and flexibility in
                    website design.
                  </li>
                </ul>
                <p>
                  <strong>Enhanced Performance:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Optimized Code:</strong> FSE generates cleaner and
                    more optimized HTML code, potentially improving website
                    performance and loading times.
                  </li>
                  <li>
                    <strong>Reduced Dependencies:</strong> By reducing reliance
                    on themes, FSE can minimize the number of files and
                    dependencies, leading to faster page loads.
                  </li>
                </ul>
                <p>
                  <strong>Better Accessibility:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Built-in Accessibility Features:</strong> FSE
                    incorporates accessibility features to ensure that websites
                    are accessible to users with disabilities.
                  </li>
                  <li>
                    <strong>Compliance with Standards:</strong> FSE helps
                    website creators comply with accessibility standards like
                    WCAG.
                  </li>
                </ul>
                <p>
                  <strong>Streamlined Workflow:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Centralized Management:</strong> FSE provides a
                    centralized platform for managing all aspects of a website,
                    from content creation to design and customization.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> FSE facilitates
                    collaboration among team members, making it easier to work
                    on websites together.
                  </li>
                  <li>
                    <strong>Version Control:</strong> FSE offers version control
                    features to track changes and revert to previous versions if
                    needed.
                  </li>
                </ul>
                <p>
                  <strong>
                    The Full Site Editor in WordPress represents a significant
                    step forward in website creation and management, offering a
                    more intuitive, flexible, and efficient experience.
                  </strong>
                </p>
              </div>
            </dl>
          </section>

          <section>
            <h3 className="text-sm font-semibold leading-7 text-slate-400">
              General
            </h3>
            <dl className="mt-2 divide-y divide-slate-100">
              <details className="group py-4 marker:content-['']">
                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&::-webkit-details-marker]:hidden">
                  What does “lifetime access” mean exactly?
                  <svg
                    className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 12H6" />
                    <path className="group-open:hidden" d="M12 6v12" />
                  </svg>
                </summary>
                <div className="pb-6 pt-6">
                  <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      Ncmaz theme products are a{' '}
                      <strong>
                        one-time purchase, with no recurring subscription
                      </strong>
                      . When you purchase the Ncmaz theme, you have access to
                      all of the content in that product forever, and life time
                      of updates.
                    </p>
                  </div>
                </div>
              </details>
              <details className="group py-4 marker:content-['']">
                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&::-webkit-details-marker]:hidden">
                  Do you offer technical support?
                  <svg
                    className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 12H6" />
                    <path className="group-open:hidden" d="M12 6v12" />
                  </svg>
                </summary>
                <div className="pb-6 pt-6">
                  <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p>
                      In case you have any questions that are beyond the scope
                      of this documentation, please join the{' '}
                      <a href="https://nghiaxchis.gitbook.io/ncmaz-blog-magazine-full-site-editing-wordpress">
                        BooliiTheme support forum
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </details>
            </dl>
          </section>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Get started today.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        It’s time to improve your website. Buy the Ncmaz theme so you can feel
        like you’re doing something productive.
      </p>
      <div className="mt-6">
        <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row">
          <Button
            href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
            target="_blank"
          >
            Buy theme
          </Button>
          <Button
            variant="secondary"
            href="https://ncmaz-fse.booliitheme.com/"
            target="_blank"
          >
            Live demo
          </Button>
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
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pb-32 pt-20">
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
          <Faqs />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
